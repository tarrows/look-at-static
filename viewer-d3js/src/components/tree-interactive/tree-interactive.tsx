import * as React from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

export interface TreeInteractiveProps {
  svgWidth: number
  svgHeight: number
  updateMousePos: (x: number, y:number) => void
}

class TreeInteractive extends React.Component<TreeInteractiveProps> {
  private svgRef = React.createRef<SVGSVGElement>()// React.RefObject<SVGSVGElement>

  componentDidMount() {
    let svg = d3.select(this.svgRef.current)

    svg.on('mousedown', () => {
      this.updateMousePos()
       // this.props.startXX()
    })
    svg.on('mousemove', () => {
      this.updateMousePos()
    })
    svg.on('mouseup', () => {
      // this.props.stopXX()
    })
    svg.on('mouseleave', () => {
      // this.props.stopXX()
    })
  }

  private updateMousePos = () => {
    if (!this.svgRef.current) {
       return
    }

    const [x, y] = d3.mouse(this.svgRef.current)
    this.props.updateMousePos(x, y)
  }

  render() {
    return (<>
      <SvgRoot width={this.props.svgWidth} height={this.props.svgHeight} ref={this.svgRef} style={{background: 'rgba(124, 224, 249, .3)'}}></SvgRoot>
    </>)
  }
}

export default TreeInteractive

const SvgRoot = styled.svg`
  background: rgba(124, 224, 249, .3);
`
