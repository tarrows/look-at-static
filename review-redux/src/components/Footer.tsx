import * as React from 'react'
import FilterLink from '../containers/FilterLink'
// import { VisibilityFilters } from '../actions'

const Footer: React.FC = () => (
  <div>
    <span>Show:</span>
    <FilterLink filter={'SHOW_ALL'}>All</FilterLink>
    <FilterLink filter={'SHOW_ACTIVE'}>Active</FilterLink>
    <FilterLink filter={'SHOW_COMPLETED'}>Completed</FilterLink>
  </div>
)

export default Footer
