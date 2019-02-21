import * as React from 'react'
import { graphql } from 'gatsby'
import HTMLHeader from '../components/HTMLHeader';
import WithAppHeader from '../components/templates/WithAppHeader';
import '../layouts/index.css'
import { SampleCsvDef, gqlToRecord } from '../graphql/sample-csv'

interface IndexProps {
  data: SampleCsvDef
}

const Index: React.FC<IndexProps> = (props) => (<>
<HTMLHeader></HTMLHeader>
<WithAppHeader data={{records: gqlToRecord(props.data)}} />
</>)

export const query = graphql`
query SampleQuery {
  allSampleCsv {
    edges {
      node {
        id
        name
        country
        city
        price
        date
      }
    }
  }
}
`

export default Index
