import { Dispatch } from 'redux'

import { setVisibilityFilter, VisibilityFilters } from '../actions'
import Link from '../components/Link'
import { connect } from 'react-redux';
import { Store } from '../store'
import { LinkProps } from '../components/Link'

interface OwnProps {
  filter: VisibilityFilters
}

interface StateProps {
  active: LinkProps["active"]
}
interface DispatchProps {
  onClick: LinkProps["onClick"]
}

const mapStateToProps = ({ visibilityFilter }: Store, ownProps: OwnProps): StateProps => ({
  active: ownProps.filter === visibilityFilter.filter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
