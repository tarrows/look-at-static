import * as React from 'react'
import styled from 'styled-components'

export interface TreeInteractiveProps {
  svgWidth: number
  svgHeight: number
}

class TreeInteractive extends React.Component<TreeInteractiveProps> {
  private svgRef = React.createRef<SVGSVGElement>()// React.RefObject<SVGSVGElement>

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
