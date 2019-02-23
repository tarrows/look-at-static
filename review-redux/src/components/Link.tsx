import * as React from 'react'

export interface LinkProps {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}

const Link: React.FC<LinkProps> = ({ active, children, onClick }) => (
  <button className="nes-btn" onClick={onClick} disabled={active} style={{ marginLeft: '4px' }} >{children}</button>
)

export default Link
