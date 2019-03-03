import * as React from 'react'

export interface TreeNodeProps {
  x: number
  y: number
}

const TreeNode: React.FC<TreeNodeProps> = ({ x, y }) => (
  <circle cx={x} cy={y} r="8"></circle>
)

export default TreeNode
