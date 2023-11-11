import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import imgs from '../images/login.png'
function Register() {
    const [email, setEmail] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email)


        // Make a POST request to your authentication endpoint
        try {
            const response = await axios.post('https://reqres.in/api/register', { "username": '', email, "password": '123' });
            // Set the token state variable with the response data
            localStorage.setItem('TTTTTTTTTTTTTTT', response.data.token);

        } catch (error) {
            alert('register failed', error);
        }
    };

    return (
        <>
            <Container fluid>
                <Row>

                    <Col xs={6} className='my-auto '>
                        <div className='px-5'>
                            <h2>Register</h2>
                            <Col md={9} >
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" required onChange={(e) => { setEmail(e.target.value) }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter password" required onChange={(e) => { setEmail(e.target.value) }} />
                                    </Form.Group>
                                    <button className='btn orange-btn w-100 ' type="submit">Register</button>

                                </Form>
                            </Col>
                        </div>

                    </Col>
                    <Col md={6}>
                        <img src={imgs} style={{ width: '100%', height: '619px' }} />
                    </Col>

                </Row>
            </Container>


        </>
    )
}

export default Register