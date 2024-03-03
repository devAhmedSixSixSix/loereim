import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PackaagesCard from "./PackaagesCard";
import featureInfo from "../../public/packaagesFeatures.json"

const Packaages = () => {
  return (
    <div className="my-5">
        <Container>
            <div className="text-center my-5">
                <h2>Company Setup Packages</h2>
                <p className="mt-5">We assess our clients requirements and offer the most practical and cost-effective rates for mainland,<br/> offshore, and free zone packages.</p>
            </div>
            <Row>
                <Col className="p-0" sm={12} md={4}>
                    <PackaagesCard
                        packaageTitle="BASIC BIZ PACKAGE"
                        packaagePrice=
                        "<p class='fs-1 mb-0'>AED 14,786</p> <br/> <p class='fs-5'>(4,050 USD)</p>"
                        packaageSubTitle="Multiple shareholders permitted "
                        borderRadius="start"
                        bgColor="#EBC684, #C4A05D"
                        fontColor="text-white"
                        featureInfo={featureInfo.fristPackaages}
                        margin="5"
                      />
                </Col>
                <Col className="p-0" sm={12} md={4}>
                    <PackaagesCard
                        packaageTitle="JUMP START DUBAI FREEZONE PACKAGES"
                        packaagePrice=
                        "<p class='fs-1 mb-0'>AED 21,900</p> <br/> <p class='fs-5'>(6,000 USD)</p>"
                        packaageSubTitle=
                        "<p class='invisible'>Multiple shareholders permitted</p>"
                        bgColor="#1c1c1c, #424243"
                        fontColor="text-white"
                        featureInfo={featureInfo.secoundPackaages}
                      />
                </Col>
                <Col className="p-0" sm={12} md={4}>
                    <PackaagesCard
                        packaageTitle="DUBAI MAINLAND BUSINESS SETUP CUSTOMIZED PACKAGE"
                        packaagePrice=
                        "<p class='fs-1 mb-0 invisible'>AED 14,786</p> <br/> <p class='fs-5 invisible'>(4,050 USD)</p>"
                        packaageSubTitle="License with 100% Ownership"
                        borderRadius="end"
                        bgColor="#EBC684, #C4A05D"
                        fontColor="text-white"
                        featureInfo={featureInfo.thirdPackaages}
                      />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Packaages
