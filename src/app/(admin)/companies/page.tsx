import CompanyRow from '../../components/company-row'
import CompanyTable from '../../components/company-table'
import { Status } from '../../components/status-label'

export default function Page() {
  return (
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
  )
}
