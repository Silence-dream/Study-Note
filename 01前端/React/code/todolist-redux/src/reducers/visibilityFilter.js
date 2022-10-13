import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  console.log("1",state)
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      console.log(action)
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
