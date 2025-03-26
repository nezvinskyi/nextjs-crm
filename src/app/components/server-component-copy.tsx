export interface ServerComponentCopyProps {
  children?: React.ReactNode
}

export default function ServerComponentCopy({
  children,
}: ServerComponentCopyProps) {
  console.log('server component copy')
  return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  )
}
