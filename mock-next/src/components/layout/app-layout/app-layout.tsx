import * as React from 'react'
import GlobalStyles from '../global-styles'
import HtmlHead from '../html-head'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = (props) => (
  <div>
    <GlobalStyles />
    <HtmlHead />
    {props.children}
  </div>
)

export default AppLayout
