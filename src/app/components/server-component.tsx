export interface ServerComponentProps {
  children?: React.ReactNode
}

export default function ServerComponent({ children }: ServerComponentProps) {
  console.log('server component')
  return (
    <div>
      <span>Server Component</span>
      {children}
    </div>
  )
}
