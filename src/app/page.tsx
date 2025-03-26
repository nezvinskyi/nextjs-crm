import { headers } from 'next/headers'
import StatusLabel, { Status } from './components/status-label'
import AddCompanyButton from './components/add-company-button'

export default function Home() {
  console.log(headers())
  return (
    <main className="">
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive} disabled>
        Not Active
      </StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended </StatusLabel>

      <AddCompanyButton />
    </main>
  )
}
