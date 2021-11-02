import React from 'react';

import { Button } from '@chakra-ui/react';

const OnePieceCategory = ({ onePieceCategory, setonePieceCategory }) => {
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
                    onePieceCategory === 'Dress' ? 'underline #0ca6c0' : 'none'
                }
                onClick={() => setonePieceCategory('Dress')}
            >
                Dress
            </Button>
            <Button
                pl="0"
                pr="15"
                bg={'none'}
                _hover={{
                    bg: 'none',
                }}
                textDecoration={
                    onePieceCategory === 'Overall'
                        ? 'underline #0ca6c0'
                        : 'none'
                }
                onClick={() => setonePieceCategory('Overall')}
            >
                Overall
            </Button>
            <Button
                pl="0"
                pr="15"
                bg={'none'}
                _hover={{
                    bg: 'none',
                }}
                textDecoration={
                    onePieceCategory === 'Swimwear'
                        ? 'underline #0ca6c0'
                        : 'none'
                }
                onClick={() => setonePieceCategory('Swimwear')}
            >
                Swimwear
            </Button>
        </div>
    );
};

export default OnePieceCategory;
