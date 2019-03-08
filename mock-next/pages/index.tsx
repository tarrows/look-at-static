// import Link from 'next/link'
import AppLayout from '../src/components/layout/app-layout'
import Navbar from '../src/components/organisms/navbar'
import '../src/styles/style.scss'

const index = () => (
  <AppLayout>
    <p>Hello Next.js</p>
    <Navbar />
  </AppLayout>
)

export default index
