import { NextApiRequest, NextApiResponse } from 'next'

let count = 0

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.headers)
  console.log(req.body)
  res.json({ msg: `Hey, kid! ${count--}` })
}
