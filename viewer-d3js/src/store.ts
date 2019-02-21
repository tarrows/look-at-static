import Particles, { ParticlesProps } from './components/particles'

export interface Store {
  generateParticles: any
  mousePos: { x: number, y: number }
  particlesPerTick: any
  isTickerStarted: boolean
  svgWidth: number
  svgHeight: number
  particles: ParticlesProps
}
