import * as React from 'react'

import { storiesOf } from '@storybook/react';

import TreeDiagram from './tree-diagram'

const Simple = () => (
  <TreeDiagram svgWidth={800} svgHeight={600} />
)

storiesOf('TreeDiagram', module).add('simple', Simple)
