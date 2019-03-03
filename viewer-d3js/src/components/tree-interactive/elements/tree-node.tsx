import * as React from 'react'

export interface TreeNodeProps {
  x: number
  y: number
  color: string
  handler: {
    onMouseEnter?: () => void
    onMouseDown?: () => void
    onMouseMove?: () => void
    onMouseUp?: () => void
    onMouseLeave?: () => void
  }
}

const TreeNode: React.FC<TreeNodeProps> = ({ x, y, color, handler }) => (
  <circle cx={x} cy={y} r="8" color={ color }
    onMouseEnter={handler.onMouseEnter}
    onMouseDown={handler.onMouseDown}
    onMouseMove={handler.onMouseMove}
    onMouseUp={handler.onMouseUp}
    onMouseLeave={handler.onMouseLeave}
  />
)

export default TreeNode
