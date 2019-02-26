import * as React from 'react'

import * as d3 from 'd3'

interface BeginningProps {
  svgWidth: number
  svgHeight: number
}

interface BeginningState {}

class Beginning extends React.Component<BeginningProps, BeginningState> {
  private svgRef = React.createRef<SVGSVGElement>()// React.RefObject<SVGSVGElement>

  constructor(props: BeginningProps) {
    super(props)
  }

  componentDidMount() {
    let svg = d3.select(this.svgRef.current)
    let myRect = svg.select("rect")
    myRect.attr("width", 100)
    myRect.attr("height", 100)
    myRect.style("fill", "steelblue")
  }

  updateMousePos = () => {}

  updateTouchPos = () => {}

  render() {
    return (
      <div onMouseDown={_ => (console.log("on mouse down"))} style={{overflow: 'hidden'}}>
        <div style={{position: 'absolute'}} className="container">
          <h1>Click or touch anywhere</h1>
        </div>
        <svg width={this.props.svgWidth} height={this.props.svgHeight} ref={this.svgRef} style={{background: 'rgba(124, 224, 249, .3)'}}>
          <rect x="150" y="100" width="60" height="200" />
        </svg>
        <div style={{position: 'absolute', bottom: 0}} className="container">
          <strong>{2} particles</strong>
        </div>
      </div>
    )
  }
}

export default Beginning
