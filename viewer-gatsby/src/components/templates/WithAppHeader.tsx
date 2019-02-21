import * as React from 'react'
import styled from 'styled-components'

import AppHeader from '../organisms/AppHeader';
import DataTable, { DataTableProps } from '../organisms/DataTable';
import QueryForm from '../molecules/QueryForm';

const Main = styled.main`
  padding: 50px 20px 0;
`

export interface TempProps {
  data: DataTableProps
}

const WithAppHeader: React.FC<TempProps> = (props) => {
  const { records } = props.data
  return (<>
  <AppHeader></AppHeader>
  <Main>
    <QueryForm />
    <DataTable records={records} />
  </Main>
  </>)
}

export default WithAppHeader
