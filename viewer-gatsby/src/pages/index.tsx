import * as React from 'react'
import HTMLHeader from '../components/HTMLHeader';
import WithAppHeader from '../components/templates/WithAppHeader';
import '../layouts/index.css'

const Index: React.FC<{}> = () => (<>
<HTMLHeader></HTMLHeader>
<WithAppHeader />
</>)

export default Index
