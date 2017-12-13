export default function filterReducer(state = {
  sort: "time",
  window: "all",
  page: "5"
}, action) {
  switch (action.payload) {
    case "CHANGE_SORT":
      return {...state, sort: action.payload}
    case "CHANGE_WINDOW":
      return {...state, window: action.payload}
    default:
      return state
  }
}
