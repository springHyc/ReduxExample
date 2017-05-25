import { combineReducers } from 'redux'
import hello from './hello';
import cityReducer from './cityReducer';

/**
 * Redux 提供了 combineReducers() 工具类来做上面 todoApp 做的事情，
 * 这样就能消灭一些样板代码了。
 *
 * 和下面的代码等价
 *
 * export default function todoApp(state = {}, action) {
 * return {
 *   visibilityFilter: visibilityFilter(state.visibilityFilter, action),
 *   todos: todos(state.todos, action)
 *  }
 * }
 *
 * 相当于合并了两个reducer
 */
const reducer = combineReducers({
  hello: hello,
  city: cityReducer
})

export default reducer
