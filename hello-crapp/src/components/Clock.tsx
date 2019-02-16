import * as React from 'react'

interface ClockProps {
  message: string
}

interface ClockState {
  date: Date
}

class Clock extends React.Component<ClockProps, ClockState> {
  private timerID?: NodeJS.Timeout

  constructor(props: ClockProps) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnMount() {
    if (this.timerID) {
      clearInterval(this.timerID)
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }

  private tick() {
    this.setState({
      date: new Date()
    })
  }
}

export default Clock
