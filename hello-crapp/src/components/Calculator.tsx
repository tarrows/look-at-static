import * as React from 'react'

interface BVProps {
  celsius: number
}

const BoilingVerdict: React.FC<BVProps> = (props) => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  } else {
    return <p>The water would not boil.</p>
  }
}

interface CalculatorState {
  scale: 'c' | 'f'
  temperature: string
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

interface TIProps {
  scale: 'c' | 'f'
  temperature: string,
  onTemperatureChange: (temperature: string) => void
}

const toCelsius = (fahrenheit: number) => {
  return (fahrenheit - 32) * 5 / 9
}

const toFahrenheit = (celsius: number) => {
  return (celsius * 9 / 5) + 32
} 

const tryConvert = (temperature: string, convert: (number: number) => number) => {
  const input = parseFloat(temperature)

  if (Number.isNaN(input)) {
    return ''
  }

  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

class TemperatureInput extends React.Component<TIProps> {
  constructor(props: TIProps) {
    super(props)
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onTemperatureChange(event.target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter tempearture in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

class Calculator extends React.Component<{}, CalculatorState> {
  constructor(props: any) {
    super(props)
    this.state = {temperature: '', scale: 'c'}
  }

  handleCelsiusChange = (temperature: string) => {
    this.setState({scale: 'c', temperature})
  }

  handleFahrenheitChange = (temperature: string) => {
    this.setState({scale: 'f', temperature})
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput scale="f" temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

export default Calculator
