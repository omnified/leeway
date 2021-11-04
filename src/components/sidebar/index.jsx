import { Avatar } from '@chakra-ui/react';
import React from 'react';
import { Tab, Col, Nav, Row } from 'react-bootstrap';

const Sidebar = ({ list, setMainCategory }) => {
    // if (size.width < 550) {
    //     return <SidebarMobile list={list} setMainCategory={setMainCategory} />;
    // }
    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                <Row>
                    <Col>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link>
                                    <Avatar src="https://bit.ly/broken-link" />
                                    <p>{list.name}</p>
                                </Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="all"
                                    onClick={() => setMainCategory('all')}
                                >
                                    All
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="regular"
                                    onClick={() => setMainCategory('regular')}
                                >
                                    Set
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="one-piece"
                                    onClick={() => setMainCategory('onePiece')}
                                >
                                    One Piece
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="shoes"
                                    onClick={() => setMainCategory('shoes')}
                                >
                                    Footwear
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
};

export default Sidebar;
