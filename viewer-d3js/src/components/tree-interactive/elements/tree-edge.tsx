import * as React from 'react'
import styled from 'styled-components'

export interface TreeEdgeProps {
  from: { x: number, y: number }
  to: { x: number, y: number }
}

const TreeEdge: React.FC<TreeEdgeProps> = ({ from, to }) => (
  <Edge d={ `M${from.x} ${from.y} L ${to.x} ${to.y}` } />
)

export default TreeEdge

const Edge = styled.path`
  fill: none;
  stroke: #555;
  stroke-opacity: 0.4;
  stroke-width: 1.5px;
`
