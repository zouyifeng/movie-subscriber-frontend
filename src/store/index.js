import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../containers/Home/store'
import serverAxios from '../server/request'
import clientAxios from '../client/request'

const reducer = combineReducers({
  home: homeReducer
})

export function getStore(req) {
  return createStore(
    reducer,
    applyMiddleware(
      thunk.withExtraArgument(serverAxios(req))
    )
  )
}

export const getClientStore = () => {
  console.log(window.context)
  const defaultState = window.context.state;
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(
      thunk.withExtraArgument(clientAxios)
    )
  )
}