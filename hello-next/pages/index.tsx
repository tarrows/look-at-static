import * as React from 'react'

import MyLayout from '../components/MyLayout'
import Link from 'next/link';

interface PostLinkProps {
  title: string
}

const PostLink: React.FC<PostLinkProps> = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

const index = () => (
  <MyLayout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </MyLayout>
)

export default index
