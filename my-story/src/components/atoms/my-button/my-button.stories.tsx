import * as React from 'react'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MyButton from '.'

const MyButtonStory = () => (
  <MyButton text={"Hello World"} onClick={action('clicked!')}></MyButton>
)

storiesOf('MyButton', module).add('with text', MyButtonStory, {})
