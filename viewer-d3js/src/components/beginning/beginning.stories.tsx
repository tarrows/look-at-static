import * as React from 'react'

import { storiesOf } from '@storybook/react';

import Beginning from '.'

const Simple = () => (
  <Beginning svgWidth={400} svgHeight={300} />
)

storiesOf('Beggining', module).add('simple', Simple)
