import React from "react"

//https://github.com/treyhuffine/lightbox-react/blob/master/src/lightbox-react.js
//https://reactjsexample.com/lightbox-for-components-or-images-built-for-react/
import LightboxReact from "lightbox-react"
import "lightbox-react/style.css"
import FluidImage from "../../components/FluidImage"
import GatsbyImage from 'gatsby-image';





const Lightbox = ({
  Carousel,
  selectedImage,
  handleClose,
  handlePrevRequest,
  handleNextRequest,
}) => {
  const array = []

  Carousel.forEach(image =>
    array.push(<FluidImage image={image}/> )
  )

  return (
    <LightboxReact
      enableZoom={false}
      clickOutsideToClose={true}
      mainSrc={array[selectedImage]}
      nextSrc={array[(selectedImage + 1) % array.length]}
      prevSrc={array[(selectedImage + array.length - 1) % Carousel.length]}
      onCloseRequest={handleClose}
      onMovePrevRequest={handlePrevRequest(selectedImage, array.length)}
      onMoveNextRequest={handleNextRequest(selectedImage, array.length)}
    />
  )
}

export default Lightbox