export function getImages(state) {
  const data = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': "application/json",
      'Authorization': process.env.REACT_APP_CLIENT_ID
    }
  }
  // https://api.imgur.com/3/gallery/{{section}}/{{sort}}/{{window}}/{{page}}?showViral=true&mature=false&album_previews=true
  // showViral=true&mature=${state.mature}&album_previews=true
  // https://api.imgur.com/3/gallery/search/time/all/0?q=cats
//https://api.imgur.com/3/gallery/${state.section}/${state.sort}/${state.window}/showViral=true&mature=${state.mature}&album_previews=true
  return (dispatch) => {
    fetch(`https://api.imgur.com/3/gallery/search/time/all/0?q=dogs&q_type=png&q_type=album`, data)
      .then(res => res.json())
      .then(pics => {
        console.log("original pics", pics)

        // const newPics = pics.data.filter(pic => {
        //   if (pic.images) {
        //     if (pic.images[0]["gifv"]) {
        //       return false
        //     } else {
        //       return true
        //     }
        //   } else {
        //     return true
        //   }
        // })
        // console.log("new pics", newPics)
        dispatch({type: 'MOUNT_IMAGES', payload: pics.data})
      })
      .catch(error => console.log("Error at getImages", error))
  }
}

export function searchImages() {
  // https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=dogs

}

export function sortImages(value) {
  return (dispatch) => {
    dispatch({type: value})
  }
}
