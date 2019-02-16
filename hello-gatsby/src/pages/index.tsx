import * as React from 'react'
// import { Provider } from 'react-redux'

import UserProfile from '../components/UserProfile';
// import configureStore from '../store';
// import { initialState } from '../services/hackernews-actions';
import Layout from '../components/layout'

export default class Index extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <UserProfile id={"hoge"} name={"piyo"} age={11} dept={"sales"}/>
        <Layout />
      </div>
    )
  }
}
