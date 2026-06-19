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
    country?: string
    area_of_interest?: string
    comments?: string
  }

  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!body.full_name || !body.email) {
    return Response.json(
      { error: 'Please fill in all required fields (Full Name and Email Address).' },
      { status: 400 },
    )
  }

  try {
    const sql = neon(databaseUrl)

    // Ensure the registrations table and its columns exist. This is idempotent
    // and self-healing: it creates the table on a fresh database and adds the
    // institute fields (country, area_of_interest) to an existing one without
    // requiring a separate migration step.
    await sql`
      CREATE TABLE IF NOT EXISTS registrations (
        id SERIAL PRIMARY KEY,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        organisation TEXT,
        role TEXT,
        country TEXT,
        area_of_interest TEXT,
        comments TEXT,
        created_at TIMESTAMPTZ DEFAULT now()
      )
    `
    await sql`ALTER TABLE registrations ADD COLUMN IF NOT EXISTS country TEXT`
    await sql`ALTER TABLE registrations ADD COLUMN IF NOT EXISTS area_of_interest TEXT`

    await sql`
      INSERT INTO registrations (full_name, email, organisation, role, country, area_of_interest, comments)
      VALUES (
        ${body.full_name},
        ${body.email},
        ${body.organisation || null},
        ${body.role || null},
        ${body.country || null},
        ${body.area_of_interest || null},
        ${body.comments || null}
      )
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
