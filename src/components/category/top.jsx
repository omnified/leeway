import React from 'react';

import { Button } from '@chakra-ui/react';

const TopCategory = ({ topCategory, setTopCategory }) => {
    return (
        <div>
            <Button
                pl="0"
                pr="15"
                bg={'none'}
                _hover={{
                    bg: 'none',
                }}
                textDecoration={
                    topCategory === 'Sleeveless' ? 'underline #0ca6c0' : 'none'
                }
                onClick={() => setTopCategory('Sleeveless')}
            >
                Sleeveless
            </Button>
            <Button
                pl="0"
                pr="15"
                bg={'none'}
                _hover={{
                    bg: 'none',
                }}
                textDecoration={
                    topCategory === 'T-shirt' ? 'underline #0ca6c0' : 'none'
                }
                onClick={() => setTopCategory('T-shirt')}
            >
                T-shirt
            </Button>
            <Button
                pl="0"
                pr="15"
                bg={'none'}
                _hover={{
                    bg: 'none',
                }}
                textDecoration={
                    topCategory === 'Shirt' ? 'underline #0ca6c0' : 'none'
                }
                onClick={() => setTopCategory('Shirt')}
            >
                Shirt
            </Button>
            <Button
                pl="0"
                pr="15"
                bg={'none'}
                _hover={{
                    bg: 'none',
                }}
                textDecoration={
                    topCategory === 'Pullover' ? 'underline #0ca6c0' : 'none'
                }
                onClick={() => setTopCategory('Pullover')}
            >
                Pullover
            </Button>
        </div>
    );
};

export default TopCategory;
