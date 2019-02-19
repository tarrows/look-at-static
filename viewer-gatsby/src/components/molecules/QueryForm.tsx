import * as React from 'react'

const QueryForm: React.FC = () => (
  <div className="container">
    <form>
    <div className="row">
      <div className="nine columns">
        <input className="u-full-width" type="text" placeholder="text"></input>
      </div>
      <div className="three columns">
        <button>Button</button>
      </div>
      </div>
    </form>
  </div>
)

export default QueryForm
