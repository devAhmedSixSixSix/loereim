import Button from 'react-bootstrap/Button';

const BTN = ({ title, BtnBgColor }) => {
  const styleBg = {
    backgroundColor: `${BtnBgColor}`
  }
  return (
    <div>
      <Button
        style={styleBg}
        className={`border-0 m-auto d-block type="submit py-2 rounded-4
        w-100 
        ${BtnBgColor === "#EBC684"? "text-black": ""}`}>
          {title}
      </Button>
    </div>
  )
}

export default BTN
