// import { withRouter } from 'next/router'
import MyLayout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'

/*
const Page = withRouter((props) => (
  <MyLayout>
    <h1>{props.router ? props.router.query ? props.router.query.title : '' : ''}</h1>
    <p>This is the blog post content.</p>
  </MyLayout>
))


export default Page
*/

const Post = (props) => (
  <MyLayout>
     <h1>{props.show.name}</h1>
     <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
     <img src={props.show.image.medium}/>
  </MyLayout>
)

Post.getInitialProps = async function (context) {
const { id } = context.query
const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
const show = await res.json()

console.log(`Fetched show: ${show.name}`)

return { show }
}

export default Post
