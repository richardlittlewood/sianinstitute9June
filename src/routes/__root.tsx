import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Scientific Institute for Advanced Nutrition (SIAN)',
      },
      {
        name: 'description',
        content: 'SIAN is an independent scientific institute advancing the science and clinical translation of BHB in metabolic nutrition. Next convening: South Florida, 8–9 December 2026.',
      },
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png',
      },
    ],
  }),
  component: RootComponent,
  shellComponent: RootDocument,
})

function RootComponent() {
  return <Outlet />
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-stone text-charcoal">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
