import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import Hello, { Props } from '../components/hello'
import { requestHello } from '../ducks/hello'
import { Store } from '../store'

interface StateProps {
  nameList: Props['nameList']
  message: Props['message']
}

interface DispatchProps {
  onSubmit: Props['onSubmit']
}

const mapStateToProps = (store: Store): StateProps => ({
  nameList: [...store.hello.nameList],
  message: store.hello.msg
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSubmit: name => dispatch(requestHello(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
