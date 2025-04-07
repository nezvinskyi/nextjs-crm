import Header from '@/app/components/header'

export interface PageProps {
  children?: React.ReactNode
}

export default function Page({}: PageProps) {
  return <Header>Companies</Header>
}
