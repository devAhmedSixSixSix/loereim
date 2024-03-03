const PackaagesCardFeature = ({ featureInfo, bgColor }) => {
    console.log(bgColor)
  return (
    <div>
        {featureInfo.map((item, index) => (
        <div key={index} className="d-flex align-items-center m-4">     
            {bgColor === "#1c1c1c, #424243" ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#d7b15f" className="bi bi-check2-circle" viewBox="0 0 16 16">
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
            </svg>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" className="bi bi-check2-circle" viewBox="0 0 16 16">
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
            </svg>
        }

            <p className="ms-3 mb-0 fs-5">{item}</p>
          </div>
      ))}
    </div>
  );
};

export default PackaagesCardFeature;
