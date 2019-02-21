import * as React from 'react'

interface ParticleProps {
  key: number
  x: number
  y: number
}

const Particle: React.FC<ParticleProps> = ({ key, x, y }) => (<circle key={key} cx={x} cy={y} r="1.8" />)

export default Particle
