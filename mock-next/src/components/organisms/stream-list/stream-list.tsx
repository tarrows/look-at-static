import * as React from 'react'
import styled from 'styled-components'

import Post from '../../molecules/post'
import { PostProps } from '../../molecules/post/post' // lame

interface StreamListProps {
  posts: PostProps[]
}

const StreamList: React.FC<StreamListProps> = ({ posts }) => (
  <Wrapper>
    {posts.map((post) => (<StreamPost key={post.id} {...post}></StreamPost>))}
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

const StreamPost = styled(Post)`
  & + & {
    margin-bottom: 5px;
  }
`

export default StreamList
