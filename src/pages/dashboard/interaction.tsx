import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import DashboardLayout from '@/components/dashboard/Layout'
import InteractionPage from '@/components/dashboard/interaction/InteractionPage'

 
const Page: NextPageWithLayout = () => {
  return (
    <div className='py-4 px-10'>
      <InteractionPage/>
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