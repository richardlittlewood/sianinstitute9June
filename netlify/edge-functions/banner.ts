import type { Context, Config } from '@netlify/edge-functions'

const BANNER_MESSAGE = 'Draft programme for Faculty review'
const DISMISS_PATH = '/__dismiss-banner'
const COOKIE_NAME = 'banner-dismissed'
const COOKIE_MAX_AGE = 2592000 // 30 days

export default async (req: Request, context: Context) => {
  const url = new URL(req.url)

  // Handle dismiss POST
  if (url.pathname === DISMISS_PATH && req.method === 'POST') {
    const referrer = req.headers.get('referer') || '/'
    return new Response(null, {
      status: 303,
      headers: {
        Location: referrer,
        'Set-Cookie': `${COOKIE_NAME}=1; Path=/; HttpOnly; SameSite=Lax; Max-Age=${COOKIE_MAX_AGE}`,
      },
    })
  }

  // Skip if already dismissed
  const cookies = req.headers.get('cookie') || ''
  if (cookies.split(';').some((c) => c.trim().startsWith(`${COOKIE_NAME}=`))) {
    return
  }

  // Get the origin response
  const response = await context.next()
  const contentType = response.headers.get('content-type') || ''

  // Only inject into HTML responses
  if (!contentType.includes('text/html')) {
    return response
  }

  const html = await response.text()

  // Only inject if there's a <body tag
  const bodyMatch = html.match(/<body([^>]*)>/i)
  if (!bodyMatch) {
    return new Response(html, response)
  }

  const bannerHtml = `
<style>
  .nf-banner { position:fixed;top:20px;right:20px;z-index:9999;max-width:320px;width:auto;display:flex;align-items:center;gap:8px;background:#1B7E82;font-family:'Inter',system-ui,-apple-system,sans-serif;font-size:14px;font-weight:500;color:#fff;padding:12px 40px 12px 16px;box-sizing:border-box;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.15); }
  .nf-banner form { position:absolute;right:4px;top:50%;transform:translateY(-50%); }
  .nf-banner button { background:none;border:none;color:#fff;font-size:20px;line-height:1;cursor:pointer;padding:6px 10px;opacity:0.8;font-family:'Inter',system-ui,-apple-system,sans-serif; }
  .nf-banner button:hover { opacity:1; }
</style>
<div class="nf-banner" role="banner">
  <span>${BANNER_MESSAGE}</span>
  <form method="POST" action="${DISMISS_PATH}">
    <button type="submit" aria-label="Dismiss banner">&times;</button>
  </form>
</div>`

  const injectedHtml = html.replace(
    bodyMatch[0],
    bodyMatch[0] + bannerHtml,
  )

  return new Response(injectedHtml, {
    status: response.status,
    headers: response.headers,
  })
}

export const config: Config = {
  path: '/*',
  excludedPath: ['/assets/*', '/_next/*', '/favicon.ico', '/sian-logo.png'],
}
