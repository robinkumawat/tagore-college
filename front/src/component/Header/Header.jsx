
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./header.css"
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Bgfirst from '../Image/bg-3.jpg'
import Logo from '../Image/logo.jpeg'
import Bgsecond from '../Image/bg-1.jpg'
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
import {Container, Row , Col } from 'react-bootstrap'

function Header() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="wapper">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
            <div className="name">
              <div className="hin">
                <h3>टैगोर पी.जी महाविद्यालय,गुढ़ा गोरजी</h3>
              </div>
              <div className="eng">
                <h3>Tagore P.G College,Gudha Gorji</h3>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <span>tagore@gmail.com</span>
                <span>098877666555</span>
                <button>Login</button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>


      {/* ...............< Second-navbar >.................. */}


      <div className="wapper-sec">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About US</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                <Nav.Link href="#link">Media</Nav.Link>


                <NavDropdown title="Student panel" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">B.Sc</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">B.A</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">B.Com</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">BCA</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">BBA</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">M.Sc</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">M.A</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">M.Com</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Bed</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>


      {/* ................<slider>................. */}


      <div className="slider">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={Bgfirst}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={Bgsecond}
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={Logo}
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      {/* ..........About college................ */}


      <div className="about-college">
        <h2>About college</h2>
        <div className="card-main">
          <div className="card-first">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Bgsecond} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="card-first">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Bgsecond}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>


      {/* ...............<Our-facilities>............... */}




      <div className="our-faci">
        <h2> Our Facilities</h2>

<div className='fac-box'>
<Container>
  <Row className='rows'>
    <Col className='cols' lg={4}>
    <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Bgsecond} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    </Col>
    <Col className='cols' lg={4}>
    <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Bgsecond} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    </Col>
    <Col className='cols' lg={4}>
    <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Bgsecond} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    </Col>
  </Row>
</Container>
</div>

<div className='fac-box'></div>
<Container>
  <Row className='rows'>
    <Col className='cols' lg={4}>
    <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Bgsecond} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    </Col>
    <Col className='cols' lg={4}>
    <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Bgsecond} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    </Col>
    <Col className='cols' lg={4}>
    <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Bgfirst} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    </Col>
  </Row>
</Container>

        {/* <div className="our-main">
          <div className="our-card">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="our-card">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="our-card">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="our-card">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="our-card">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="our-card">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div> */}
      </div>
  

      {/* ................,courses................. */}

      <div className="our-cour">
        <h2>Our-courses </h2>
        <div className="our-cources">
          <div className="our-cor">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Bgfirst} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="our-cor">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Bgfirst} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="our-cor">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Bgfirst} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        </div>
        <a href="">
          <button>View All</button>
        </a>
      </div>
      {/* ................FORM..................... */}

      <Container>
      <div className="form-main">
<Row className='rows' mt-5 mb-5>
  <Col className='cols' lg={6} >
  <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                // defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group> */}
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
           
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
  </Col>
  <Col className='cols' lg={6}>
  <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.528965756721!2d75.5213261752605!3d27.88573637608087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ccd5bd01662eb%3A0x43d184498d282d59!2sTagore%20College%20Campus!5e0!3m2!1sen!2sin!4v1702703900588!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
  </Col>
</Row>

      
      
      </div>
      </Container>

      {/* ...........footer.................. */}


<div className="main-footer">
<Container>
      <Row className='rows'>
        <Col className='cols' lg={2}>
        </Col>

        <Col className='cols' lg={2}>
          <h2>Tagore P.G College</h2>

          <p>Tagore PG College Gudha Gorji,Jhunjhunu is a very popular college in the state of Rajasthan.It is one of the leading colleges in Arts,Humanities and Social Scieces,Business Finance and Commerce,Computer Science and Mathematucs.It is located in Jhunjhunu,Rajasthan.</p>
          

        </Col>
        <Col className='cols' lg={2}>
        </Col>
        <Col className='cols' lg={2}>
         <h2>Contact Us</h2>
         <p>Tagore PG College Gudha Gorji-333022,Jhunjhunu,Rajasthan</p>
         <p>+919460066518</p>
         <p>+917597607102</p>
         <p>tagore@gmail.com</p>
         <p>Tagore College</p>

        </Col>
        <Col className='cols' lg={2}>
        </Col>
      </Row>
      
    </Container>
</div>
    </>
  );
}

export default Header;