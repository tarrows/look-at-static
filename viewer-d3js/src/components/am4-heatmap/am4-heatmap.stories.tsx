import * as React from 'react'

import { storiesOf } from '@storybook/react';

import Am4Heatmap from './am4-heatmap'

const Simple = () => (
  <Am4Heatmap />
)

storiesOf('Am4Heatmap', module).add('simple', Simple)
