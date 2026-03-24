import { neon } from '@neondatabase/serverless'
import type { Config } from '@netlify/functions'

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const databaseUrl = Netlify.env.get('DATABASE_URL')
  if (!databaseUrl) {
    return Response.json(
      { error: 'Database connection not configured' },
      { status: 500 },
    )
  }

  let body: {
    full_name: string
    email: string
    organisation?: string
    role?: string
    attendance: string
    comments?: string
  }

  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!body.full_name || !body.email || !body.attendance) {
    return Response.json(
      { error: 'Missing required fields: full_name, email, and attendance are required' },
      { status: 400 },
    )
  }

  try {
    const sql = neon(databaseUrl)

    await sql`
      INSERT INTO registrations (full_name, email, organisation, role, attendance, comments)
      VALUES (${body.full_name}, ${body.email}, ${body.organisation || null}, ${body.role || null}, ${body.attendance}, ${body.comments || null})
    `

    return Response.json({ success: true, message: 'Registration saved successfully' })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Database insert error:', message)
    return Response.json(
      { error: 'Failed to save registration' },
      { status: 500 },
    )
  }
}

export const config: Config = {
  path: '/api/submit-registration',
  method: 'POST',
}
