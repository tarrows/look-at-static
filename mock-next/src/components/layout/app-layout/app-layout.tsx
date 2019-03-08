import * as React from 'react'
import HtmlHead from '../html-head'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = (props) => (
  <div>
    <HtmlHead />
    {props.children}
  </div>
)

export default AppLayout
