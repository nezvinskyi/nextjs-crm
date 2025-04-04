import MagicButton from '@/app/components/magic-button'
import AddCompanyButton from '../../components/add-company-button'
import CompanyRow from '../../components/company-row'
import CompanyTable from '../../components/company-table'
import Header from '../../components/header'
import SearchInput from '../../components/search-input'
import { Status } from '../../components/status-label'
import Toolbar from '../../components/toolbar'

export interface PageProps {
  children?: React.ReactNode
}

export default function Page() {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'CostCo'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate="02.18.2021"
        />
        <CompanyRow
          id={2}
          category={'Real Estate'}
          company={'DAAHFLX'}
          status={Status.Active}
          promotion={true}
          country={'Austria'}
          joinedDate="02.18.2024"
        />
      </CompanyTable>
      <MagicButton />
    </>
  )
}
