import { Avatar } from '@chakra-ui/react';
import React from 'react';
import { Nav } from 'react-bootstrap';

const SidebarMobile = ({ list, setMainCategory }) => {
    return (
        <>
            <Nav defaultActiveKey="all" as="ul">
                <Nav.Item as="li">
                    <Nav.Link>
                        <Avatar src="https://bit.ly/broken-link" />
                        <p>{list.name}</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link
                        eventKey="all"
                        onClick={() => setMainCategory('all')}
                    >
                        All
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link
                        eventKey="regular"
                        onClick={() => setMainCategory('regular')}
                    >
                        Set
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link
                        eventKey="one-piece"
                        onClick={() => setMainCategory('onePiece')}
                    >
                        One Piece
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
};

export default SidebarMobile;
