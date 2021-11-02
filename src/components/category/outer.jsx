import React from 'react';

import { Button } from '@chakra-ui/react';

const OuterCategory = ({ outerCategory, setOuterCategory }) => {
    return (
        <div>
            <Button
                bg={'none'}
                _hover={{
                    bg: 'none',
                }}
                textDecoration={
                    outerCategory === 'Coat' ? 'underline #0ca6c0' : 'none'
                }
                onClick={() => setOuterCategory('Coat')}
            >
                Coat
            </Button>
            <Button
                bg={'none'}
                _hover={{
                    bg: 'none',
                }}
                textDecoration={
                    outerCategory === 'Blazer' ? 'underline #0ca6c0' : 'none'
                }
                onClick={() => setOuterCategory('Blazer')}
            >
                Blazer
            </Button>
            <Button
                bg={'none'}
                _hover={{
                    bg: 'none',
                }}
                textDecoration={
                    outerCategory === 'Cardigans' ? 'underline #0ca6c0' : 'none'
                }
                onClick={() => setOuterCategory('Cardigans')}
            >
                Cardigans
            </Button>
            <Button
                bg={'none'}
                _hover={{
                    bg: 'none',
                }}
                textDecoration={
                    outerCategory === 'Jacket' ? 'underline #0ca6c0' : 'none'
                }
                onClick={() => setOuterCategory('Jacket')}
            >
                Jacket
            </Button>
        </div>
    );
};

export default OuterCategory;
