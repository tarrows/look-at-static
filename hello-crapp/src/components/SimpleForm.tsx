import * as React from 'react'

interface SimpleFormState {
  value: string
}

class SimpleForm extends React.Component<{}, SimpleFormState> {
  constructor(props: any) {
    super(props)
    this.state = {value: ''}
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(this.state.value)
  }

  render() {
    return (
      <div>
        <p>value on change: {this.state.value}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit" value="Submit">SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default SimpleForm
