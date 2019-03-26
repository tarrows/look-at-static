import * as React from 'react'

const RecordInput: React.FC = () => (
  <form action="#">
    <div className="mdl-textfield mdl-js-textfield">
      <input className="mdl-textfield__input" type="text" />
      <label className="mdl-textfield__label" >Key...</label>
    </div>
    <div className="mdl-textfield mdl-js-textfield">
      <input className="mdl-textfield__input" type="text" />
      <label className="mdl-textfield__label" >Val...</label>
    </div>
  </form>
)

export default RecordInput
