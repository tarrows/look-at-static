import * as React from 'react'

const arange = (start: number, end: number) => Array.from({length: (end - start + 1)}, (_, k) => k + start);

interface DataTableProps {}

const DataTable: React.FC<DataTableProps> = (_) => {
  return (<>
    <table className="u-full-width">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>DEPT</th>
          <th>DESCRIPTION</th>
        </tr>
      </thead>
      <tbody>
        {arange(1, 100).map(i => (<tr><td>{i}</td><td>John Doe</td><td>Global XXX</td><td>Hello, World</td></tr>))}
      </tbody>
    </table>
  </>)
}

export default DataTable
