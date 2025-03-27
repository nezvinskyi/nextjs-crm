import Link from 'next/link'

export interface NotFoundProps {
  error: Error & { message?: string }
  reset: () => void
}

export default function NotFound({}: NotFoundProps) {
  return (
    <div className="">
      <p>Company is not found</p>
      <Link href="/companies" className="text-blue-500">
        Back
      </Link>
    </div>
  )
}
