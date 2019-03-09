// import Link from 'next/link'
import AppLayout from '../src/components/layout/app-layout'
import AppHeader from '../src/components/organisms/app-header'
import StreamList from '../src/components/organisms/stream-list'
import Footer from '../src/components/molecules/list-footer'
import '../src/styles/style.scss'

const post = {
  className: 'post',
  portrait: 'account_circle',
  name: 'Sherlyn S.',
  content: 'I built a tree house out of reclaimed cedar and gave it a coat of my home-made organic coffee-based varnish. Tree housewarming party this weekend!',
  date: 'December 5'
}

const posts = Array.from({length: 6}, (_, k) => 0 + k).map(i => ({id: i, ...post}))

const index = () => (
  <AppLayout>
    <AppHeader />
    <div className="container">
      <p style={{backgroundColor: 'pink'}}>I will be a header</p>
      <StreamList posts={posts} />
      <Footer />
    </div>
  </AppLayout>
)

export default index
