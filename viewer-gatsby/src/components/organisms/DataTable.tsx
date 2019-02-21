import * as React from 'react'

import { SampleCsvRecord } from '../../graphql/sample-csv'

const arange = (start: number, end: number) => Array.from({length: (end - start + 1)}, (_, k) => k + start);

export interface DataTableProps {
  records: SampleCsvRecord[]
}

const DataTable: React.FC<DataTableProps> = ({ records }) => {
  return (<>
    <table className="u-full-width">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>COUNTRY</th>
          <th>CITY</th>
          <th>PRICE</th>
          <th>DATE</th>
        </tr>
      </thead>
      <tbody>
        {records.map(x => (
          <tr>
            <td>{x.id}</td>
            <td>{x.name}</td>
            <td>{x.country}</td>
            <td>{x.city}</td>
            <td>{x.price}</td>
            <td>{x.date}</td>
          </tr>
          )
        )}
      </tbody>
    </table>
  </>)
}

export default DataTable
