import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const ListFooter: React.FC = () => (
<Wrapper>
  <FooterSection>
    <FooterFeedbackItem>
      <FooterSpinner>
        <i className="material-icons md-24" style={{ fontSize: '24px' }}>autorenew</i>
      </FooterSpinner>
    </FooterFeedbackItem>
  </FooterSection>
  <FooterSection>
    <FooterItem>Footer1</FooterItem>
    <FooterItem>Footer2</FooterItem>
  </FooterSection>
</Wrapper>)

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #D7DBDD;
  padding: 10px;
`

const FooterSection = styled.div`
  display: flex;
  align-items: center;
`

const FooterItem = styled.div`
  & + & {
    margin-left: 5px;
  }
`

const FooterFeedbackItem = styled(FooterItem)`
  color: #86969C;
  font-size: 12px;
  line-height: 0;
`

const formFooterSpinner = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const FooterSpinner = styled.div`
  animation: ${formFooterSpinner} 1s infinite steps(8, end);
`

export default ListFooter
