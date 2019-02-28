import * as React from 'react'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 20px;
  padding: 10px;
`

import MyInput from '.'

const MyInputStory = () => (
  <Wrapper>
    <MyInput></MyInput>
  </Wrapper>
)

storiesOf('MyInput', module).add('with text', MyInputStory)
