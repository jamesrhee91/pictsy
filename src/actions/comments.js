export function addComment(pic, comment) {
  return (dispatch) => {
    dispatch({type: "ADD_COMMENT", pic: pic, payload: comment})
  }
}
