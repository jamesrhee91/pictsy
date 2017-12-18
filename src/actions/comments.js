export function addComment(picId, comment) {
  return (dispatch) => {
    dispatch({type: "ADD_COMMENT", picId, payload: comment})
  }
}
