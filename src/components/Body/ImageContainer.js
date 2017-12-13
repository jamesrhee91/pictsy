import React from 'react'
import './style.css'

export default class ImageContainer extends React.Component {
  state = {
    images: []
  }

  componentDidMount() {
    const data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json",
        'Authorization': 'Client-ID b794206794b7f0f'
      }
    }
    // https://api.imgur.com/3/gallery/top/viral/day/1?showViral=true&mature=false&album_previews=true
    // https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=dogs
    fetch('https://api.imgur.com/3/gallery/top/viral/day/1?showViral=true&mature=false&album_previews=true', data)
      .then(res => res.json())
      .then(pics => {
        console.log("old pics", pics.data)
        const newPics = pics.data.filter(pic => {
          if (pic.images) {
            if (pic.images[0]["gifv"]) {
              return false
            } else {
              return true
            }
          } else {
            return true
          }
        })
        console.log("new pics", newPics)
        this.setState({
          images: newPics
        })
      })
  }

  render() {
    const images = this.state.images.map(pic => {
      if (pic.images) {
        return <div key={pic.id} className="image" style={{backgroundImage: `url(${pic.images[0]["link"]})`}}></div>
      } else {
        return <div key={pic.id} className="image" style={{backgroundImage: `url(${pic.link})`}}></div>
      }
      // return <div key={pic.id} className="image" style={{backgroundImage: `url(https://i.imgur.com/${pic.cover}.jpg)`}}></div>
    })
    return (
      <div className="image-wrapper">
        {images}
      </div>
    )
  }
}
