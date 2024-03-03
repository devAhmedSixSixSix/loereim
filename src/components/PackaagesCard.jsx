import BTN from "./BTN"
import PackaagesCardFeature from "./PackaagesCardFeature"

const PackaagesCard = ({
  packaageTitle, packaagePrice, packaageSubTitle, borderRadius, bgColor, fontColor, featureInfo,margin }) => {
  const bg = {
    background: `linear-gradient(180deg,${bgColor})`
  }
  return (
        
    <div
      style={bg}
      className={`p-2 grow-on-hover d-flex align-items-start flex-column py-5 h-100 mb-3 position-relative ${fontColor} rounded-${borderRadius}`} >
      <div>
      
      <h2 className={`mb-5 pb-5 ms-${margin} text-center position-absolute ${bgColor === "#EBC684, #C4A05D" ? "text-black" : "text-white"}`}
      >{packaageTitle}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: packaagePrice }}
        className={`text-center mt-5 py-5 ${bgColor === "#1c1c1c, #424243" ? "custom-sub-font-color" : "text-black"}`}></div>
      
        <p dangerouslySetInnerHTML={{ __html: packaageSubTitle }} className={`my-5 text-center fs-5 fw-lighter ${bgColor === "#EBC684, #C4A05D" ? "text-black" : ""}`}></p>
      <div className="">
        <BTN
          title="APPLY NOW!"
          BtnBgColor={bgColor === "#EBC684, #C4A05D" ? "#000000" : "#EBC684"}
          />
          <hr className="w-100 m-auto my-5" />
          </div>
        <PackaagesCardFeature bgColor={bgColor} featureInfo={featureInfo} />
        </div>
      <div className="mt-auto w-100">
        <hr className="w-100 m-auto my-5" />
        <BTN
          title="APPLY NOW!"
          BtnBgColor={bgColor === "#EBC684, #C4A05D" ? "#000000" : "#EBC684"}
          />
        <p className={`mt-4 text-center ${bgColor === "#EBC684, #C4A05D" ? "text-black" : ""}`}>T&C Apply</p>
      </div>
    </div>
  )
}

export default PackaagesCard
