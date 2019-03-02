import * as React from 'react'

export interface TreeNodePorps {
  x: number
  y: number
}

const TreeNode: React.FC<TreeNodePorps> = ({ x, y }) => (
  <circle cx={x} cy={y} r="1.8"></circle>
)

export default TreeNode
