import Container from "react-bootstrap/Container";
import HeroBannerText from "./HeroBannerText";
import HeroBannerForm from "./HeroBannerForm";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HeroBanner = () => {
    
  return (
      <div>
          <Container>
              <Row className="d-flex align-items-center mt-5">
                  <Col md={8}>
                    <HeroBannerText />
                  </Col>
                  <Col md={4}>
                    <HeroBannerForm/>
                  </Col>
              </Row>
          </Container>
    </div>
  )
}

export default HeroBanner
