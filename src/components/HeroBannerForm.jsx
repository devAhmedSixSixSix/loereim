import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import BTN from './BTN';

const HeroBannerForm = () => {
  return (
    <>
      
      <h4 className='custom-sub-font-color'>Get a Call-Back in 50 seconds!</h4>
      <Form className="text-white">
            
          <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Your name <small>(Required)</small></Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>
            
          <p className=''>Your phone number  <small>(Required)</small></p>
          <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">
                    <Form.Select aria-label="Default select example">
                      <option>Country</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                  </Form.Select>
                  </InputGroup.Text>
                  <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  />
          </InputGroup>
            
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Massage <small>(Optional)</small></Form.Label>
              <Form.Control as="textarea" rows={3} />
          </Form.Group>
            
        <BTN title="Call Us Now!" BtnBgColor="#EBC684"/>
      </Form>
      <p className='text-white text-center mt-4'> &#x1F512; 100% Privacy Guaranteed</p>
    </>
  )
}

export default HeroBannerForm
