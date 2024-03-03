import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BrandLogo from "../assets/smart-zones-uae-business-setup-logo.svg"

function Navegationbar() {
  return (
    <Navbar className="bg-transparent">
      <Container>
        <Navbar.Brand>
          <img src={BrandLogo} alt="brand logo" className="w-25"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
          >
            
          </Nav>
          <div className="d-flex">
            <Button variant="success" className="border border-1 btn lh-base px-3 py-2 rounded-pill me-4">
              COST CALCULATOR
            </Button>
            <svg className="mx-4 d-block d-sm-block d-lg-none w-25" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 40 41" fill="none"><g clipPath="url(#clip0_579_663)"><g filter="url(#filter0_f_579_663)"><path d="M12.4491 31.6063L12.9593 31.9085C15.1023 33.1803 17.5593 33.8531 20.0651 33.8543H20.0703C27.7653 33.8543 34.0277 27.5932 34.0309 19.8978C34.0323 16.1687 32.5815 12.6619 29.9457 10.024C28.6529 8.72307 27.1149 7.69148 25.4207 6.98896C23.7265 6.28643 21.9098 5.92692 20.0758 5.93123C12.3749 5.93123 6.11222 12.1916 6.10948 19.8866C6.10569 22.5142 6.84563 25.0892 8.24376 27.314L8.57592 27.8418L7.16532 32.9915L12.4491 31.6063ZM3.13235 36.9811L5.51547 28.2801C4.04574 25.7338 3.27252 22.845 3.27344 19.8854C3.27732 10.6269 10.8118 3.09473 20.0705 3.09473C24.5635 3.09701 28.7807 4.84548 31.9523 8.01939C35.124 11.1933 36.869 15.4121 36.8674 19.8989C36.8633 29.1567 29.3277 36.6903 20.0703 36.6903H20.063C17.2521 36.6892 14.49 35.984 12.0366 34.6462L3.13235 36.9811Z" fill="#B3B3B3"></path></g><path d="M2.95999 36.8093L5.34311 28.1082C3.87085 25.5557 3.09752 22.6602 3.10107 19.7136C3.10496 10.455 10.6394 2.92285 19.8982 2.92285C24.3911 2.92513 28.6083 4.67361 31.78 7.84752C34.9516 11.0214 36.6966 15.2402 36.695 19.727C36.6909 28.9849 29.1553 36.5184 19.8979 36.5184H19.8906C17.0797 36.5173 14.3176 35.8121 11.8642 34.4743L2.95999 36.8093Z" fill="white"></path><path d="M19.9032 5.75883C12.2023 5.75883 5.93964 12.0192 5.9369 19.7142C5.93311 22.3418 6.67305 24.9168 8.07118 27.1416L8.40335 27.6696L6.99274 32.8194L12.2767 31.4339L12.787 31.7361C14.9299 33.0079 17.387 33.6805 19.8927 33.6818H19.898C27.5929 33.6818 33.8556 27.4208 33.8586 19.7254C33.8644 17.8912 33.5063 16.0741 32.805 14.3792C32.1038 12.6844 31.0733 11.1455 29.7733 9.8516C28.4805 8.55065 26.9424 7.51904 25.2482 6.81651C23.554 6.11399 21.7373 5.75449 19.9032 5.75883Z" fill="url(#paint0_linear_579_663)"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.6999 12.6938C15.3853 11.9951 15.0543 11.9809 14.7555 11.9688L13.951 11.959C13.6711 11.959 13.2164 12.064 12.8319 12.4841C12.4475 12.9041 11.3629 13.9193 11.3629 15.9842C11.3629 18.0491 12.8669 20.0443 13.0764 20.3247C13.286 20.605 15.9798 24.9774 20.2459 26.6597C23.791 28.0577 24.5124 27.7797 25.2822 27.7098C26.052 27.64 27.7653 26.6946 28.1148 25.7146C28.4643 24.7345 28.4645 23.8949 28.3597 23.7193C28.2549 23.5438 27.9751 23.4394 27.555 23.2294C27.135 23.0194 25.0719 22.0042 24.6872 21.864C24.3026 21.7238 24.0229 21.6542 23.7428 22.0743C23.4627 22.4943 22.6593 23.4392 22.4144 23.7193C22.1694 23.9994 21.9249 24.0346 21.5049 23.8248C21.0848 23.615 19.7334 23.1717 18.1298 21.7419C16.8822 20.6294 16.0401 19.2556 15.7949 18.8358C15.5497 18.4159 15.7689 18.1886 15.9794 17.9794C16.1677 17.7913 16.399 17.4893 16.6092 17.2443C16.8195 16.9994 16.8886 16.8243 17.0283 16.5446C17.1681 16.265 17.0984 16.0193 16.9934 15.8095C16.8884 15.5997 16.073 13.5239 15.6999 12.6938Z" fill="white"></path></g><defs><filter id="filter0_f_579_663" x="-3.92965" y="-3.96727" width="47.859" height="48.0107" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="3.531" result="effect1_foregroundBlur_579_663"></feGaussianBlur></filter><linearGradient id="paint0_linear_579_663" x1="19.6135" y1="7.43447" x2="19.755" y2="31.2964" gradientUnits="userSpaceOnUse"><stop stopColor="#57D163"></stop><stop offset="1" stopColor="#23B33A"></stop></linearGradient><clipPath id="clip0_579_663"><rect width="40" height="40.0767" fill="white"></rect></clipPath></defs></svg>
          </div>
          <h2 className="custom-sub-font-color d-none d-lg-block">+971 52 960 4444</h2>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegationbar;
