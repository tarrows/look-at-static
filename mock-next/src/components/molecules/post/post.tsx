/**
 * Style Ref: https://www.flexboxpatterns.com/post
 */

import * as React from 'react'
import styled from 'styled-components'

import color from '../../constants/color'

export interface PostProps {
  id: number
  portrait: string
  name: string
  content: string
  date: string
  className?: string
}

const Post: React.FC<PostProps> = ({ portrait, name, content, date, className }) => (
  <Wrapper className={className}>
    <PostUser>
      <UserPortrait><i className="material-icons md-48" style={{ fontSize: '48px' }}>{portrait}</i></UserPortrait>
      <UserName>{name}</UserName>
    </PostUser>
    <PostBody>
      <BodyContent>{content}</BodyContent>
      <BodyDate>{date}</BodyDate>
    </PostBody>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  background-color: ${color().base}
`

const PostUser = styled.div`
  flex: 0 1 auto;
  padding-bottom: 10px;
`

const UserPortrait = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 60px;
  font-size: 70px;
  line-height: 0;
`

const UserName = styled.div`
  color: ${color().main};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
`

const BaseBody = styled.div `
  flex: 1 1 0%;
  position: relative;
  padding: 15px;
  border: 1px solid #CAD0D2;
  border-radius: 4px;
`

const PostBody = styled(BaseBody)`
  &:after,
  &:before {
    right: 100%;
    top: 35px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: transparent;
    border-right-color: #ffffff;
    border-width: 8px;
    margin-top: -8px;
  }

  &:before {
    border-color: transparent;
    border-right-color: #CAD0D2;
    border-width: 9px;
    margin-top: -9px;
  }
`

const BodyContent = styled.div`
  color: ${color().main};
  font-size: 12px;
`

const BodyDate = styled.div`
  margin-top: 5px;
  color: #86969C;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export default Post
