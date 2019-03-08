import * as React from 'react'
import styled from 'styled-components'

interface AppHeaderProps {}

const AppHeader: React.FC<AppHeaderProps> = () => {
  return (
    <Wrapper>
      <HeaderSection>
          <HeaderItemSelected>Home</HeaderItemSelected>
          <HeaderItem>Inbox</HeaderItem>
      </HeaderSection>
      <HeaderSection>
          <HeaderItem>Settings</HeaderItem>
          <HeaderItem>Feedback</HeaderItem>
      </HeaderSection>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  /**
   * Lay out the children of this container with
   * flexbox, which is horizontal by default.
   */
  display: flex;

  /**
   * Make the container put as much space as possible
   * between its children, with the children at either
   * end laying flush against the container's edges.
   */
  justify-content: space-between;

  padding: 10px;
  background-color: #56727C;
`

const HeaderSection = styled.div`
  /**
   * Lay out the children of this container with
   * flexbox.
   */
  display: flex;

  /**
   * Align the children in the center, along
   * the main axis. By default the children will
   * align along their top edges.
   */
  align-items: center;
`

const HeaderItem = styled.div`
  padding: 5px 15px;
  font-size: 12px;
`

const HeaderItems = styled(HeaderItem)`
  & + & {
    margin-left: 5px;
  }
`

const HeaderItemSelected = styled(HeaderItem)`
  color: #FFFFFF;
  background-color: #415F69;
  border-radius: 4px;
`



export default AppHeader
