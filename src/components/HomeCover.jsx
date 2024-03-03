import heroBanner from "../assets/download.jpg"
import HeroBanner from "./HeroBanner"
import Navegationbar from "./Navegationbar"

const HomeCover = () => {
  const styleing = {
    bg: {
         backgroundImage: `url(${heroBanner})`,
        backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        width: "100%",
        height: "100%",
    },
    overlay : {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }

  }
  return (
    <div style={styleing.bg}>
      <div style={styleing.overlay}>

        <Navegationbar />
            <hr className="text-light m-0"/>
        <HeroBanner />
      </div>
    </div>
  )
}

export default HomeCover
