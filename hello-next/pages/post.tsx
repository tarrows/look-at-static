import { withRouter } from 'next/router'
import MyLayout from '../components/MyLayout'

const Page = withRouter((props) => (
  <MyLayout>
    <h1>{props.router ? props.router.query ? props.router.query.title : '' : ''}</h1>
    <p>This is the blog post content.</p>
  </MyLayout>
))

export default Page
