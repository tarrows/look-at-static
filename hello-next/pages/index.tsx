import * as React from 'react'

import MyLayout from '../components/MyLayout'
import Link from 'next/link';

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

export default index
