import * as React from 'react'

import { storiesOf } from '@storybook/react';

import Tab from '.'

const WithText = () => (
  <Tab contents={[{text: "Music", isActive: true}, {text: "Review"}, {text: "Favorite"}]}></Tab>
)

storiesOf('Tab', module).add('with-text', WithText)
