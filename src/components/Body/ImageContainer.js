import React from 'react'
import './style.css'
import ImageCard from './ImageCard'



const ImageContainer = ({ filtered }) => {

    const allImages = filtered.map((pic, idx) => {
      if (pic.images[0]) {
        return <ImageCard key={pic.id} idx={idx} pic={pic} url={pic.images[0]["link"]} />
      } else {
        return <ImageCard key={pic.id} idx={idx} pic={pic} url={pic.link} />
      }
    })
    console.log("current filtered", filtered)
    return (
      <div className="image-wrapper">
        {allImages}
      </div>
    )
}

export default ImageContainer
