export function addComment(currentImage, comment) {
  return (dispatch) => {
    dispatch({type: "ADD_COMMENT", currentImage, payload: comment})
  }
}
