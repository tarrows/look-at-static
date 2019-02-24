import * as React from 'react'
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

interface MyLayoutProps {
  children: React.ReactNode
}

const MyLayout: React.FC<MyLayoutProps> = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default MyLayout
