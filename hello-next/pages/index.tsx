import * as React from 'react'

import MyLayout from '../components/MyLayout'
import Link from 'next/link';

import fetch from 'isomorphic-unfetch'


const index = (props) => (
  <MyLayout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </MyLayout>
)

index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}


/*
interface PostLinkProps {
  id: string
  title: string
}

const PostLink: React.FC<PostLinkProps> = ({ id, title }) => (
  <li>
    <Link as={`/p/${id}`} href={`post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

const index = () => (
  <MyLayout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
    </ul>
  </MyLayout>
)
*/
export default index
