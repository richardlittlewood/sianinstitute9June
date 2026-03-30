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
        title: 'Scientific Institute for Advanced Nutrition | SIAN Special Focus Meeting 2026',
      },
      {
        name: 'description',
        content: 'Join the SIAN Special Focus Meeting on 9 June 2026. A premier event for clinicians and researchers in applied metabolic nutrition and BHB research.',
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
      <body className="bg-white text-sian-text">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
