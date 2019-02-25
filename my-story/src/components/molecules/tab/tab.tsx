import * as React from 'react'
import styled from 'styled-components'

interface TabProps {
  contents: Array<{ text: string, isActive?: boolean }>
}

const Tab: React.FC<TabProps> = ({ contents }) => (
<Tabs>
  {contents.map(x => (x.isActive ? <ActiveTab>{ x.text }</ActiveTab> : <TabContent>{ x.text }</TabContent>))}
</Tabs>
)

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #D7DBDD;
`

const TabContent = styled.div`
  cursor: pointer;
  padding: 5px 38px;
  color: #16A2D7;
  fontt-size: 12px;
  border-bottom: 2px solid transparent;
`

const ActiveTab = styled(TabContent)`
  border-bottom-color: #4EBBE4;
`

export default Tab
