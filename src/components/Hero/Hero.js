import React from "react"
import FluidImage from "../../components/FluidImage"

const Hero = ({ image, text, textColor }) => {

  return (
    <section style={{ position: "relative", width: '100%'}} id={'Film'}>
      <FluidImage image={image} style={{width: `100%`, height: `100% ` }}/>
      <p style={{
        color: textColor,
        position: "absolute",
        top: `calc( 50% - 20px )`,
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: '40px',
        textAlign: 'center',
        lineHeight: 1,
      }}>{text}</p>

    </section>
  )
}

export default Hero
