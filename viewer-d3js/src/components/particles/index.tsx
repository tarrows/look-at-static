import * as React from 'react'

import Particle from './particle'

export interface ParticlesProps {
  particles: Array<{id: number, x: number, y: number}>
}

const Particles: React.FC<ParticlesProps> = ({ particles }) => (
  <g>{ particles.map(particle => <Particle key={particle.id} {...particle} />) }</g>
)

export default Particles
