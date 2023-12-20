
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Student from './Image/studentlogo.png'
import './student-record.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
// import Col from 'react-bootstrap/Col';




const Record = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', father: '', a: '', b: '', c: '', d: '', e: '', f: '', });
  const [studentRecords, setStudentRecords] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRecords = [...studentRecords, formData];
    setStudentRecords(updatedRecords);

    setFormData({
      firstName: '',
      lastName: '',
      father: '',
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
    });
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
      <div className='record'>
        <h2>STUDENT RECORD</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col} md="4" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="father">
            <Form.Label>Father's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Father name"
              name="father"
              value={formData.father}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="a">
            <Form.Label>A</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter marks"
              name="a"
              value={formData.a}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group md="4" as={Col} controlId="b">
            <Form.Label>b</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter marks"
              name="b"
              value={formData.b}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group md="4" as={Col} Control="c">
            <Form.Label>c</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter marks"
              name="c"
              value={formData.c}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Label md="4" as={Col} Control="d">
            <Form.Label>d</Form.Label>
            <Form.Control
              type='text'
              placeholder='enter marks'
              name='d'
              value={formData.d}
              onChange={handleChange}
              required
            />
          </Form.Label>

          <Form.Group md="4" as={Col} Control="e">
            <Form.Label>e</Form.Label>
            <Form.Control
            type='text'
            placeholder='enter marks'
            name='e'
            value={formData.e}
            onChange={handleChange}
            required
            />
          </Form.Group>

          <Form.Group md='4' as={Col}>
            <Form.Label>f</Form.Label>
            <Form.Control
            type='text'
            placeholder='enter marks'
            name='f'
            value={formData.f}
            onChange={handleChange}
            required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <hr />

        <h2>Student Records</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Father's name</th>
              <th>A</th>
              <th>B</th>
              <th>C</th>
              <th>D</th>
              <th>E</th>
              <th>F</th>
            </tr>
          </thead>
          <tbody>
            {studentRecords.map((record, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{record.firstName}</td>
                <td>{record.lastName}</td>
                <td>{record.father}</td>
                <td>{record.a}</td>
                <td>{record.b}</td>
                <td>{record.c}</td>
                <td>{record.d}</td>
                <td>{record.e}</td>
                <td>{record.f}</td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Record;
