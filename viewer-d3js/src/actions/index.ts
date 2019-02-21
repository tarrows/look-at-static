export const UPDATE_MOUSE_POS = 'UPDATE_MOUSE_POS'
export const CREATE_PARTICLES = 'CREATE_PARTICLES'
export const START_PARTICLES = 'START_PARTICLES'
export const STOP_PARTICLES = 'STOP_PARTICLES'
export const TICKER_STARTED = 'TICKER_STARTED'
export const RESIZE_SCREEN = 'RESIZE_SCREEN'
export const TIME_TICK = 'TIME_TICK'

export type Action = ReturnType<typeof resizeScreen 
  | typeof updateMousePos 
  | typeof createParticles 
  | typeof startParticles 
  | typeof stopParticles 
  | typeof tickerStarted 
  | typeof tickTime
>

export const resizeScreen = (width: number, height:number) => ({
  type: RESIZE_SCREEN as typeof RESIZE_SCREEN,
  payload: { width, height }
})

export const updateMousePos = (x: number, y:number) => ({
  type: UPDATE_MOUSE_POS as typeof UPDATE_MOUSE_POS,
  payload: { x, y }
})

export const createParticles = (x: number, y:number, N: number) => ({
  type: CREATE_PARTICLES as typeof CREATE_PARTICLES,
  payload: { x, y, N }
})

export const startParticles = () => ({ type: START_PARTICLES as typeof START_PARTICLES })
export const stopParticles = () => ({ type: STOP_PARTICLES as typeof STOP_PARTICLES })
export const tickerStarted = () => ({ type: TICKER_STARTED as typeof TICKER_STARTED })
export const tickTime = () => ({ type: TIME_TICK as typeof TIME_TICK })
