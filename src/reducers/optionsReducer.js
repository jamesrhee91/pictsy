export default function optionsReducer(state = {
  images: [],
  currentSort: 'LATEST',
  mature: false,
}, action) {
  let newImages

  switch (action.type) {
    case "MOUNT_IMAGES":
      return {...state, images: action.payload}
    case "MOST_VIEWS":
      newImages = state.images.slice().sort(_compareValues('views', 'desc'))
      return {...state, images: newImages, currentSort: action.type}
    case "MOST_UPVOTES":
      newImages = state.images.slice().sort(_compareValues('ups', 'desc'))
      return {...state, images: newImages, currentSort: action.type}
    case "MOST_FAV":
      newImages = state.images.slice().sort(_compareValues('favorite_count', 'desc'))
      return {...state, images: newImages, currentSort: action.type}
    case "LATEST":
      newImages = state.images.slice().sort(_compareValues('datetime', 'desc'))
      return {...state, images: newImages, currentSort: action.type}
    default:
      return state
  }
}

function _compareValues(key, order='asc') {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {return 0}

    const varA = (typeof(a[key]) === 'string') ? a[key].toUpperCase() : a[key]
    const varB = (typeof(b[key]) === 'string') ? b[key].toUpperCase() : b[key]

    let comparison = 0
    if (varA > varB) {
      comparison = 1
    } else if (varA < varB) {
      comparison = -1
    }
    return (
      (order == 'desc') ? (comparison * -1) : comparison
    )
  }
}
