import * as React from 'react'

import { storiesOf } from '@storybook/react';

import TreeInteractive from './tree-interactive'

import SvgTree, { SvgTreeProps } from './elements/svg-tree'

const Default = () => (
  <TreeInteractive svgWidth={800} svgHeight={600} />
)

const ElementsOnly = () => {
  const tree: SvgTreeProps = {
    nodes: {0: {x: 100, y: 200}, 1: {x: 300, y: 50}},
    edges: {0: 1}
  }

  return (
  <svg width={500} height={400} style={{background: 'rgba(124, 224, 249, .3)'}}>
    <SvgTree {...tree}></SvgTree>
  </svg>
  )

}

storiesOf('TreeInteractive', module).add('default', Default)
storiesOf('TreeInteractive', module).add('elements-only', ElementsOnly)
