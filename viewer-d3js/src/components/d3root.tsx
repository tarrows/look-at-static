import * as React from 'react'

import d3 from 'd3'

import Particles, { ParticlesProps } from './particles'

interface D3RootProps {
  svgWidth: number
  svgHeight: number
  particles: ParticlesProps
  startTicker: () => void
  updateMousePos: (x: number, y: number) => void
  startParticles: () => void
  stopParticles: () => void
}

interface D3RootState {}

class D3Root extends React.Component<D3RootProps, D3RootState> {
  private svgRef?: SVGSVGElement // React.RefObject<SVGElement>

  constructor(props: D3RootProps) {
    super(props)
    // this.svgRef =  // React.createRef()
  }

  componentDidMount() {
    if (!this.svgRef) { return }

    let svg = d3.select(this.svgRef)

    svg.on('mousedown', () => {
      this.updateMousePos()
      this.props.startParticles()
    })

    svg.on('touchstart', () => {
      this.updateTouchPos()
      this.props.startParticles()
    })

    svg.on('mousemove', () => { this.updateMousePos() })
    svg.on('touchmove', () => { this.updateTouchPos() })
    svg.on('mouseup', () => { this.props.stopParticles() })
    svg.on('touchend', () => { this.props.stopParticles() })
    svg.on('mouseleave', () => { this.props.stopParticles() })
  }

  updateMousePos = () => {
    if (!this.svgRef) { return }

    const [x, y] = d3.mouse(this.svgRef)
    this.props.updateMousePos(x, y)
  }

  updateTouchPos = () => {
    if (!this.svgRef) { return }

    const [x, y] = d3.touches(this.svgRef)[0]
    this.props.updateMousePos(x, y)
  }

  render() {
    return (
      <div onMouseDown={_ => this.props.startTicker()} style={{overflow: 'hidden'}}>
        <div style={{position: 'absolute'}} className="container">
          <h1>Click or touch anywhere</h1>
        </div>
        <svg width={this.props.svgWidth} height={this.props.svgHeight} ref={(ref: SVGSVGElement) => this.svgRef = ref} style={{background: 'rgba(124, 224, 249, .3)'}}>
          <Particles particles={this.props.particles.particles} />
        </svg>
        <div style={{position: 'absolute', bottom: 0}} className="container">
          <strong>{this.props.particles.particles.length} particles</strong>
        </div>
      </div>
    )
  }
}

export default D3Root
