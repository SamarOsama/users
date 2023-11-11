import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import imgs from '../images/login.png'

function Login() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://reqres.in/api/login', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate(`/users`);

        } catch (error) {
            console.error('Login failed', error);
            alert("wrong credintials")
        }
    };

    const handleInputChange1 = (event) => {
        setemail(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setpassword(event.target.value);
    };

    return (

        <Container fluid>
            <Row >
                <Col md={6} className='my-auto '>
                    <div className='px-5'>
                        <h2>Sign Into</h2>
                        <h3>Your Account</h3>
                        <Col md={9} >
                            <Form onSubmit={handleSubmit}>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" required
                                        value={email} onChange={handleInputChange1} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Enter password" required
                                        value={password} onChange={handleInputChange2} />
                                </Form.Group>

                                <button className='btn orange-btn w-100 ' type="submit">Login</button>
                            </Form>
                        </Col>

                    </div>

                </Col>
                <Col md={6}>
                    <img src={imgs} style={{ width: '100%', height: '619px' }} />
                </Col>


            </Row>

        </Container>


    );

}

export default Login