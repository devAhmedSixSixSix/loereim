import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CompanySetupOptionsCard from "./CompanySetupOptionsCard";
import UnderLine from "./UnderLine";

const CompanySetupOptions = () => {
  return (
    <div>
        <Container>
        <h2>Company Setup Options in Dubai - UAE </h2>
        <UnderLine/>
            <p className="my-5">One-stop solution for investors and entrepreneurs</p>
            <Row>
                <Col sm={12} md={4}>
                    <CompanySetupOptionsCard title="Mainland"/>
                </Col>
                <Col sm={12} md={4}>
                    <CompanySetupOptionsCard title="Free Zone"/>
                </Col>
                <Col sm={12} md={4}>
                    <CompanySetupOptionsCard title="Offshore"/>
                </Col>
            </Row>  
      </Container>
    </div>
  )
}

export default CompanySetupOptions
