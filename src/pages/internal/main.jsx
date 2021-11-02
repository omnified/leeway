import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({ closetItems }) => {
    return (
        <>
            <SimpleGrid columns={[2, null, 3]} spacing="40px" mt={20}>
                {closetItems.map((list) => (
                    <div key={list.id}>
                        <Box bg="none" height="80px" textAlign="center">
                            <Link to={`/closet/${list.id}`}>{list.name}</Link>
                        </Box>
                    </div>
                ))}
            </SimpleGrid>
        </>
    );
};
export default Main;
