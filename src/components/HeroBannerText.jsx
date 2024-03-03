import UnderLine from "./UnderLine"
import emoji from "../assets/lunch-emoji.png"
const HeroBannerText = () => {
  return (
    <div className="text-white py-5 position-relative ">
      <img src={emoji} alt="lunch emoji" className="position-absolute" style={{
        top: "30px",
        left: "-90px",
        width:"100px"
      }} />
          <h2 className="display-2 fw-normal custom-text-shadow">
              Launch Your Dream
              <br />
              Company In UAE at
               <br />
              <span> Just </span>
              5,650 AED
      </h2>
      <UnderLine/>
          <p className="h2 fw-lighter my-5">UAE’S #1 BUSINESS SETUP CONSULTANTS</p>
          <p className="h2 fw-lighter mb-5">
            From Vision to Reality
              <br />
            let Dubai be your Entrepreneurial Oasis 
          </p>
    </div>
  )
}

export default HeroBannerText
