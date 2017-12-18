export function getImages(state) {
  const data = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': "application/json",
      'Authorization': process.env.REACT_APP_CLIENT_ID
    }
  }
  return (dispatch) => {
    fetch(`https://api.imgur.com/3/gallery/search/time/all/0?q=dogs&q_type=png&q_type=album`, data)
      .then(res => res.json())
      .then(images => {
        console.log("original images", images)
        dispatch({type: 'MOUNT_IMAGES', payload: images.data})
      })
      .catch(error => console.log("Error at getImages", error))
  }
}

export function searchImages(query) {
  const data = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': "application/json",
      'Authorization': process.env.REACT_APP_CLIENT_ID
    }
  }
  return (dispatch) => {
    fetch(`https://api.imgur.com/3/gallery/search/time/all/0?q=${query}&q_type=png&q_type=album`, data)
      .then(res => res.json())
      .then(images => {
        console.log("search results", images)
        dispatch({type: "SEARCH_IMAGES", payload: images.data })
      })
      .catch(error => console.log("Error at searchImages", error))
  }

}

export function sortImages(value) {
  return (dispatch) => {
    dispatch({type: value})
  }
}
