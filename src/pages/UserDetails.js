import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { Navigate, useParams } from 'react-router-dom';
import EditModal from '../components/EditModal';

const UserDetails = () => {
    const [user, setUser] = useState(null);
    const { userId } = useParams();
    const [updatedUser, setUpdatedUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [UpdatedResponse, setUpdatedResponse] = useState({});
    const handleClose = () => {
        setIsEditing(false)
    }


    useEffect(() => {

        // Fetch user details using the selectedUserId
        fetchUserDetails(userId);
    }, [userId]);
    const fetchUserDetails = async (userId) => {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${userId}`);
            console.log("dataaaaaaaaaaa" + JSON.stringify(response.data.data))
            setUser(response.data.data);

        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put(`https://reqres.in/api/users/${userId}`, updatedUser);
            console.log("dataaaaaaaaaaa" + JSON.stringify(response.data))
            setUpdatedResponse(response.data)

        } catch (error) {
            console.error('Error:', error);
        }

        setIsEditing(false);

    };

    const handleInputChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>  {user ? (
                        <div>

                            {isEditing ? <Modal show={isEditing} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit user</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>

                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="first_name"
                                            value={updatedUser?.first_name}
                                            onChange={handleInputChange}
                                        />
                                        <Form.Label htmlFor="">last name</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="last_name"
                                            value={updatedUser?.last_name}
                                            onChange={handleInputChange}
                                        />
                                        <Form.Label htmlFor="">email</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="email"
                                            value={updatedUser?.email}
                                            onChange={handleInputChange}
                                        />
                                        <button className='btn orange-btn w-100 my-2' onClick={handleSaveClick}>Save</button>
                                    </Form>
                                </Modal.Body>

                            </Modal>


                                :
                                <>



                                    <Row >
                                        <Col xs={6} className='mx-auto my-2'>
                                            <div className='bg-light d-flex p-3  justify-content-between align-items-center'>
                                                <h6>User Details</h6>
                                                <button className='btn orange-btn' onClick={() => { handleEditClick() }}>Edit</button>

                                            </div>

                                        </Col>

                                    </Row>
                                    {UpdatedResponse.email ?
                                        <Row>
                                            <Col xs={6} className='mx-auto my-2'>
                                                <div className='bg-light p-3 d-flex '>
                                                    <div>
                                                        <img src={user.avatar} alt="" />
                                                    </div>
                                                    <div className='px-4'>
                                                        <p>Name: {UpdatedResponse.first_name} </p>
                                                        <p>email: {UpdatedResponse.email} </p>
                                                    </div>

                                                </div>
                                            </Col>
                                        </Row>

                                        :
                                        <Row>
                                            <Col xs={6} className='mx-auto my-2'>
                                                <div className='bg-light p-3'>
                                                    <p>Name: {user.first_name} </p>
                                                    <p>email: {user.email} </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    }



                                </>
                            }
                        </div>

                    ) : (
                        <p>Loading user details...</p>
                    )}
                    </Col>

                </Row>
            </Container>



        </>
    );
};

export default UserDetails;