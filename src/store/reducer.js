import { createStore } from "redux"
import * as ActionTypes from "./actions"
const initalState = {
  pages: [],
  navbar_links: [],
  side_navbar_links: [],
  site_info: null,
  isLoaded: false,
  projects: []
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PAGES:
      return Object.assign({}, state, {
        pages: action.pages
      })
    case ActionTypes.SET_NAVBAR_LINKS:
      return Object.assign({}, state, {
        navbar_links: action.navbar_links
      })
    case ActionTypes.SET_SIDE_NAVBAR_LINKS:
      return Object.assign({}, state, {
        side_navbar_links: action.side_navbar_links
      })
    case ActionTypes.SET_PROJECTS:
      return Object.assign({}, state, {
        projects: action.projects
      })
    case ActionTypes.SET_SITE_INFO:
      return Object.assign({}, state, {
        site_info: action.site_info
      })
    case ActionTypes.IS_LOADED:
      return Object.assign({}, state, {
        isLoaded: true
      })
    default:
      return state
  }
}

export const store = () =>
  createStore(
    reducer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
