'use client'

import Button from './components/button'

export interface GlobalErrorProps {
  error: Error & { message?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <h1>Something globally went wrong</h1>

        <p>Error: {error.message}</p>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  )
}
