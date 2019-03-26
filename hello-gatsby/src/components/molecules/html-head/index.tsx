import * as React from 'react'
import { Helmet } from 'react-helmet'

const HTMLHead: React.FC = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>S A G A</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
  </Helmet>
)

export default HTMLHead
