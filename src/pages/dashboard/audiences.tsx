import type { ReactElement } from 'react'

import type { NextPageWithLayout } from '../_app'
import DashboardLayout from '@/components/dashboard/Layout'
import AudiencePage from '@/components/dashboard/audiences/AudiencePage'



 
const Page: NextPageWithLayout = () => {
  return (
    <div className='py-4 px-10'>
       <AudiencePage/>
    </div>
  )
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}
 
export default Page