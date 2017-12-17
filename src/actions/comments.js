export function addComment(idx, comment) {
  return (dispatch) => {
    dispatch({type: "ADD_COMMENT", idx, payload: comment})
  }
}
