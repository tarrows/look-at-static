// import Link from 'next/link'
import AppLayout from '../src/components/layout/app-layout'
import AppHeader from '../src/components/organisms/app-header'
import '../src/styles/style.scss'

const index = () => (
  <AppLayout>
    <AppHeader />
    <p>Hello Next.js</p>
  </AppLayout>
)

export default index
