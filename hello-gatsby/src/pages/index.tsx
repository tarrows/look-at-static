import * as React from 'react'

import UserProfile from '../components/UserProfile';

export default class Index extends React.Component<{}, {}> {
  public render() {
    return (<div><h1>Hello, World!</h1><UserProfile id={"hoge"} name={"piyo"} age={11} dept={"sales"}/></div>)
  }
}
