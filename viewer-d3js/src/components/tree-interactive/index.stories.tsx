import * as React from 'react'

import { storiesOf } from '@storybook/react';

import TreeInteractive from './tree-interactive'

const Default = () => (
  <TreeInteractive svgWidth={800} svgHeight={600} />
)

storiesOf('TreeInteractive', module).add('default', Default)
