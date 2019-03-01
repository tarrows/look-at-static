import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

const Input = styled.input`
  border: 1px solid rgba(147, 128, 108, 0.25);
  padding: 0.5em 0.75em;
  flex: 1;
  border-radius: 0 2px 2px 0;
`

const Prefix = styled.span`
  border: 1px solid rgba(147, 128, 108, 0.25);
  padding: 0.5em 0.75em;
  background-color: rgba(147, 128, 108, 0.1);
  color: #666666;
  border-radius: 2px 0 0 2px;
`

const MyInput: React.FC = () => (
<Wrapper>
  <Prefix>Amount</Prefix>
  <Input></Input>
</Wrapper>
)

export default MyInput
