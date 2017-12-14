export default function filterReducer(state = {
  images: [],
}, action) {
  switch (action.type) {
    case "CHANGE_IMAGES":
      return {...state, images: action.payload}
    case "CHANGE_SORT":
      return {...state, sort: action.payload}
    case "CHANGE_WINDOW":
      return {...state, window: action.payload}
    default:
      return state
  }
}
