import * as React from 'react'

export interface TreeEdgePorps {
  from: { x: number, y: number }
  to: { x: number, y: number }
}

const TreeEdge: React.FC<TreeEdgePorps> = ({ from, to }) => (
  <path d={ `M${from.x} ${from.y} L ${to.x} ${to.y}` } />
)

export default TreeEdge
