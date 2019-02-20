import * as React from 'react'
import styled from 'styled-components'

import AppHeader from '../organisms/AppHeader';
import DataTable from '../organisms/DataTable';
import QueryForm from '../molecules/QueryForm';

const Main = styled.main`
  padding: 50px 20px 0;
`

const WithAppHeader: React.FC = () => {
  return (<>
  <AppHeader></AppHeader>
  <Main>
    <QueryForm />
    <DataTable />
  </Main>
  </>)
}

export default WithAppHeader
