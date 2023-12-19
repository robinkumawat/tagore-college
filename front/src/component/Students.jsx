import React from 'react'
import './student.css'

import NavDropdown from 'react-bootstrap/NavDropdown';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Student from './Image/studentlogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Students() {


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
            <div className='container'>
                <div className="hadder">
                    <div className='logo'><img src={Student} alt="" /></div>
                    <div className='decription'>
                        <h4>Tagore P.G College </h4>
                        <h6>Gudha Gorji, juhunjhunu, rajasthan</h6>

                        <h6>983-3989-282</h6>

                    </div>
                </div>
            </div>
            <div className="student-form">
                <h2>STUDENT FORM</h2>
                <Container>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>First name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                // defaultValue="Mark"
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Last name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name" />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>D.O.B :</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="Date of Birth" />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Father's name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Father's name" />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Mother's name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Mother's name" />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Phone No.</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Phone no." />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Parents No.</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Perents number" />
                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label>Course</Form.Label>
                                <Form.Select md="4" aria-label="Default select example">
                                    <option>Course</option>
                                    <option value="1">B.A</option>
                                    <option value="2">B.SC</option>
                                    <option value="3">BCA</option>
                                    <option value="3">BBA</option>
                                    <option value="3">M.Sc</option>
                                    <option value="3">M.A</option>
                                    <option value="3">M.Com</option>
                                    <option value="3">Bed</option>
                                </Form.Select>
                            </Form.Group>

                            
                            <Form.Group as={Col} md="4">
                                <Form.Label htmlFor="">Gender</Form.Label>
                                <Form.Select md="4" aria-label="Default select example">
                                    <option>Gender</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">others</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Local address.</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="local addres" />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Permanent address.</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Permanent address" />
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Email .</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Email" />
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                                <Form.Label> Photo</Form.Label>
                                <Form.Control
                                    required
                                    type="File"
                                >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                                <Form.Label>Aadhar Card</Form.Label>
                                <Form.Control
                                    required
                                    type="File"
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Registration Date :</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="Date of Birth" />
                            </Form.Group>
                            

                            
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" required />
                                <Form.Control.Feedback type="invalid">

                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State" required />
                                <Form.Control.Feedback type="invalid">

                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <Form.Label>Pin-Code</Form.Label>
                                <Form.Control type="text" placeholder="Pin-Code" required />
                                <Form.Control.Feedback type="invalid">

                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Button type="submit">Submit form</Button>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default Students