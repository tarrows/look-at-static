import * as React from 'react'
import { Helmet } from 'react-helmet'

const MyHelmet: React.FC = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Data Viewer</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
  </Helmet>
)

export default MyHelmet
