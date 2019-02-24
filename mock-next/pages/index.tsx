import Link from 'next/link'

const index = () => (
  <div>
    <Link href="/about">
    <button>Go to About Page</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default index