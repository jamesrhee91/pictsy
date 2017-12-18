export default function optionsReducer(state = {
  images: [],
  currentSort: 'LATEST',
  mature: false
}, action) {
  let newImages = Object.assign([], state.images)

  switch (action.type) {
    case "MOUNT_IMAGES":
      return {...state, images: action.payload}
    case "SEARCH_IMAGES":
      return {...state, images: action.payload}
    case "MOST_VIEWS":
      newImages.sort(_compareValues('views', 'desc'))
      return {...state, images: newImages, currentSort: action.type}
    case "MOST_UPVOTES":
      newImages.sort(_compareValues('ups', 'desc'))
      return {...state, images: newImages, currentSort: action.type}
    case "MOST_FAV":
      newImages.sort(_compareValues('favorite_count', 'desc'))
      return {...state, images: newImages, currentSort: action.type}
    case "LATEST":
      newImages.sort(_compareValues('datetime', 'desc'))
      return {...state, images: newImages, currentSort: action.type}
    case "ADD_COMMENT":
      newImages.map(image => {
        if (image.id === action.picId) {
          if (image.comments) {
            let length = image.comments.length
            image.comments.push({ [length]:action.payload })
          } else {
            image.comments = []
            image.comments.push({ "0":action.payload })
          }
          return image
        }
        return image
      })
      return {...state, images: newImages}
    case "DELETE_COMMENT":
      let currentImage = newImages.find(image => {
        return image.id === action.picId
      })
      currentImage.comments.splice(action.idx, 1)
      return {...state, images: newImages}
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
