import * as React from 'react'
import { Helmet } from 'react-helmet'

const MyHelmet: React.FC = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Data Viewer</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
    <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css"></link>
  </Helmet>
)

export default MyHelmet
