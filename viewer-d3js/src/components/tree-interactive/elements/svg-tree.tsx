import * as React from 'react'

import TreeNode, { TreeNodeProps } from './tree-node'
import TreeEdge, { TreeEdgeProps } from './tree-edge'

export interface SvgTreeProps {
  nodes: { [id: number]: TreeNodeProps }
  edges: { [from: number]: number }
}

const SvgTree: React.FC<SvgTreeProps> = ({ nodes, edges }) => (
  <g>
    {Object.entries(nodes).map(([id, node]) => (
      <TreeNode key={id} {...node} />
    ))}
    {Object.entries(edges).map(([from, to]) => (
      <TreeEdge key={`${from}:${to}`} 
        from={{...nodes[parseInt(from)]}}
        to={{...nodes[to]}} />
    ))}
  </g>
)

export default SvgTree
