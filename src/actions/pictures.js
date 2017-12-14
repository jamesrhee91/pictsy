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
    fetch(`https://api.imgur.com/3/gallery/search/top/all/0?q=dogs&q_type=png&q_type=album`, data)
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
        dispatch({type: 'CHANGE_IMAGES', payload: pics.data})
      })
      .catch(error => console.log("Error at getImages", error))
  }
}

export function searchImages() {
  // https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=dogs

}


// export function sendData(lat, lon) {
//   const data = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': "application/json"
//    },
//     body: JSON.stringify({
//       location: {
//         lon: lon,
//         lat: lat
//       }
//     })
//   }
//   return (dispatch) => {
//     fetch('https://parx-api.herokuapp.com/api/v1/locations', data)
//       .then(res => res.json())
//       .then(response => {
//         if (response.success) {
//           dispatch({type: 'SAVED_LOCATION'})
//           Alert.alert("Thank you for contributing!", "Parking has been saved")
//         } else if (response.exists) {
//           Alert.alert("Location", "Parking space was previously saved")
//         } else {
//           Alert.alert("An error occured", "Please try again")
//         }
//       })
//       .catch(error => console.log("Error at sendData", error))
//   }
// }
