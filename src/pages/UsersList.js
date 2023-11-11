import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Modal, Row, Table } from 'react-bootstrap'
import { useNavigate, useHistory } from 'react-router-dom'
import EditModal from '../components/EditModal'
import UsersContext from '../context/UsersContext'
import UserDetails from './UserDetails'

function UsersList() {
    const { usersList } = useContext(UsersContext)
    const [SelectedUserId, setSelectedUserId] = useState(null)

    const navigate = useNavigate()
    const handleUserClick = async (userId) => {
        setSelectedUserId(userId);
        // Navigate to the user details page with the correct userId
        navigate(`/userdetails/${userId}`);
    };


    return (
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2>Users</h2>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Email</th>

                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {usersList.map((user, i) =>
                                    <tr>
                                        <td onClick={() => { handleUserClick(user.id) }}>{user.id}</td>
                                        <td>
                                            <img src={user.avatar} className='img-fluid rounded mx-2' style={{ width: '50px', height: '50px' }} />
                                            {user.first_name}</td>
                                        <td>
                                            {user.email}</td>

                                        <td >
                                            <div className='d-flex justify-content-around align-items-center'>
                                                <button className='btn btn-success'>Edit</button>
                                                <button className='btn btn-danger'>Delete</button>
                                            </div>
                                        </td>
                                    </tr>)}


                            </tbody>






                        </Table>
                    </Col>
                </Row>

            </Container>


        </>
    )
}

export default UsersList