import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { Store } from '../store'
import { toggleTodo } from '../actions'
// import { VisibilityFilters } from '../actions'
import TodoList from '../components/TodoList'
import { TodoListProps } from '../components/TodoList'

// import { VisibilityFilterState } from '../reducers/visibilityFilter'

const getVisibleTodos = ({ todos, visibilityFilter } : Store) => {
  switch(visibilityFilter.filter) { // lame
    case 'SHOW_ALL':
      return todos.todos
    case 'SHOW_COMPLETED':
      return todos.todos.filter(t => t.completed) // lame
    case 'SHOW_ACTIVE':
      return todos.todos.filter(t => !t.completed) // lame
    default:
      // throw new Error('Unknown filter: ' + filter)
      const _: never = visibilityFilter.filter
      return todos.todos
  }
}

interface StateProps {
  todos: TodoListProps["todos"]
}

interface DispatchProps {
  toggleTodo: TodoListProps["toggleTodo"]
}

const mapStateToProps = ({ todos, visibilityFilter }: Store): StateProps => ({
  todos: getVisibleTodos({ todos, visibilityFilter })
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
