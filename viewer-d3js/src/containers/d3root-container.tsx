import * as React from 'react'

import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import D3Root from '../components/d3root'
import { Store } from '../store'

import * as Actions from '../actions'

class D3RootContainer extends React.Component {
  componentDidMount() {}
  componentWillUnmount() {}
}

const mapStateToProps = (_: Store) => ({})
