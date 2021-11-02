import React from 'react';

import { Button } from '@chakra-ui/react';

const BottomCategory = ({ bottomCategory, setBottomCategory }) => {
    return (
        <div>
            <Button
                bg={'none'}
                _hover={{
                    bg: 'none',
                }}
                textDecoration={
                    bottomCategory === 'Pants' ? 'underline #0ca6c0' : 'none'
                }
                onClick={() => setBottomCategory('Pants')}
            >
                Pants
            </Button>
            <Button
                bg={'none'}
                _hover={{
                    bg: 'none',
                }}
                textDecoration={
                    bottomCategory === 'Short' ? 'underline #0ca6c0' : 'none'
                }
                onClick={() => setBottomCategory('Short')}
            >
                Short
            </Button>
            <Button
                bg={'none'}
                _hover={{
                    bg: 'none',
                }}
                textDecoration={
                    bottomCategory === 'Skirt' ? 'underline #0ca6c0' : 'none'
                }
                onClick={() => setBottomCategory('Skirt')}
            >
                Skirt
            </Button>
        </div>
    );
};

export default BottomCategory;
