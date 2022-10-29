import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

const AppNavbar = () => {
    const [showModal, setShowModal] = useState(false);
    const shirkhand = { fontFamily: 'Shrikhand', fontSize: 35, color: '#FFA3BB' };
    return (
        <>
            <Navbar bg='white' variant='dark' expand='lg'>
                <Container fluid>
                    <Navbar.Brand style={shirkhand} as={Link} to='/home'>
                        Kilisi Vazquez
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <Nav class="navbar-nav ml-auto" >
                            <Form.Control className='square rounded-pill' style={{ color: 'lightgrey' }} placeholder="Search For Friends" controlId="formBasicSearch" />
                                <>
                                    <Nav.Link style={{ color: 'black' }} onClick={Auth.logout}>Git Hub</Nav.Link>
                                </>
                                <Nav.Link style={{ color: 'black' }} onClick={() => setShowModal(true)}>Socials</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            set modal data up
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='signup-modal'>
                {/* tab container to do either signup or login component */}
                <Tab.Container defaultActiveKey='login'>
                    <Modal.Header closeButton>
                        <Modal.Title id='signup-modal'>
                            <Nav variant='pills'>
                                <Nav.Item>
                                    <Nav.Link style={{ color: 'black' }} eventKey='login'>Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link style={{ color: 'black' }} eventKey='signup'>Sign Up</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='login'>
                                <LoginForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                            <Tab.Pane eventKey='signup'>
                                {/* <SignUpForm handleModalClose={() => setShowModal(false)} /> */}
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </>
    );
};

export default AppNavbar;