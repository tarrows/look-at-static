import * as React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background-color: #abcdef;
  height: 48px;
  width: 100%;
  top: 0px;
  position: sticky;
  z-index: 999;
`

export interface AppHeaderProps {}

const AppHeader: React.FC<AppHeaderProps> = (_) => (
  <Header><p>I am Header</p></Header>
)

export default AppHeader
