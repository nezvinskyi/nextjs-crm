import React from 'react'
import Header from '@/app/components/header'
import { notFound } from 'next/navigation'

export interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const log = Array.from({ length: 10 })
  const mockData = log.map((_, index) => ({ id: index.toString() }))
  return mockData
}

export default async function Page({ params }: PageProps) {
  const { id } = await params

  if (Number.isNaN(Number.parseInt(id))) {
    notFound()
  }

  return (
    <>
      <Header>Company ({id})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  )
}
