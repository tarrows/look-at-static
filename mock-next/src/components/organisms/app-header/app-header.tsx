import * as React from 'react'
import styled from 'styled-components'

import color from '../../constants/color'

interface AppHeaderProps {}

const AppHeader: React.FC<AppHeaderProps> = () => {
  return (
    <Wrapper>
      <HeaderSection>
        <HeaderLogo><i className="material-icons">memory</i></HeaderLogo>
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

  padding: 0 10px;
  background-color: ${ color().base };
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

const HeaderItemBase = styled.div`
  padding: 5px 15px;
  font-size: 12px;
`

const HeaderItem = styled(HeaderItemBase)`
  & + & {
    margin-left: 5px;
  }
`

const HeaderItemSelected = styled(HeaderItem)`
  color: rgb(103, 197, 222);
  border-bottom: solid 2px rgb(103, 197, 222);
`

const HeaderLogo = styled(HeaderItem)`
  font-size: 20px;
  line-height: 0;
`

export default AppHeader
