import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Grid,
    GridItem,
    SimpleGrid,
    Stat,
    StatLabel,
} from '@chakra-ui/react';

import Pants from '../components/bottom/pants';

import BottomCategory from '../components/category/bottom';
import Blazer from '../components/outer/blazer';
import Coat from '../components/outer/coat';
import Jacket from '../components/outer/jacket';
import Cardigans from '../components/outer/cardigans';
import Dress from '../components/onePiece/dress';
import TopCategory from '../components/category/top';
import OuterCategory from '../components/category/outer';
import Short from '../components/bottom/short';
import Skirt from '../components/bottom/skirt';
import OnePieceCategory from '../components/category/onePiece';
import Overall from '../components/onePiece/overall';

import Swimsuit from '../components/onePiece/swimwear';
import Tshirt from '../components/top/t-shirt';
import Sleeveless from '../components/top/sleeveless';
import Shirt from '../components/top/shirt';
import Pullover from '../components/top/pullover';
import All from './all';
import Sidebar from '../components/sidebar';

const Closet = ({ closetItems }) => {
    const { id } = useParams();

    const [mainCategory, setMainCategory] = useState('all');

    const [topCategory, setTopCategory] = useState('T-shirt');
    const [bottomCategory, setBottomCategory] = useState('Pants');
    const [outerCategory, setOuterCategory] = useState('Blazer');
    const [onePieceCategory, setonePieceCategory] = useState('Dress');

    console.log('shirts', closetItems[7]);

    return (
        <>
            {/* STRUCTURE  */}

            {closetItems &&
                closetItems
                    .filter((list) => list.id === parseInt(id))
                    .map((list) => (
                        <div
                            key={list.id}
                            className="justify-content-center text-center"
                            style={{ marginTop: '2rem' }}
                        >
                            <Grid
                                h="100%"
                                templateRows="repeat(2, 1fr)"
                                templateColumns="repeat(5, 1fr)"
                                gap={4}
                            >
                                <GridItem
                                    rowSpan={2}
                                    colSpan={1}
                                    borderRight={'1px solid black'}
                                    bg="white"
                                >
                                    {' '}
                                    <Sidebar
                                        list={list}
                                        setMainCategory={setMainCategory}
                                    />
                                </GridItem>
                                <GridItem colSpan={4}>
                                    {mainCategory === 'regular' ? (
                                        <>
                                            <SimpleGrid
                                                columns={[1, null, 3]}
                                                spacing="40px"
                                                textAlign="left"
                                                mt={'2rem'}
                                            >
                                                <Box
                                                    maxW="7xl"
                                                    mx={'auto'}
                                                    pt={5}
                                                    px={{
                                                        base: 2,
                                                        sm: 12,
                                                        md: 17,
                                                    }}
                                                >
                                                    <Stat
                                                        px={{ base: 4, md: 8 }}
                                                        py={'5'}
                                                        shadow={'xl'}
                                                        border={'1px solid'}
                                                        rounded={'lg'}
                                                    >
                                                        <StatLabel
                                                            fontWeight={
                                                                'medium'
                                                            }
                                                            isTruncated
                                                        >
                                                            TOP:
                                                        </StatLabel>
                                                        <TopCategory
                                                            topCategory={
                                                                topCategory
                                                            }
                                                            setTopCategory={
                                                                setTopCategory
                                                            }
                                                        />
                                                    </Stat>
                                                </Box>
                                                <Box
                                                    mx={'auto'}
                                                    pt={5}
                                                    px={{
                                                        base: 2,
                                                        sm: 12,
                                                        md: 17,
                                                    }}
                                                >
                                                    <Stat
                                                        px={{ base: 4, md: 8 }}
                                                        py={'5'}
                                                        shadow={'xl'}
                                                        border={'1px solid'}
                                                        rounded={'lg'}
                                                    >
                                                        <StatLabel
                                                            fontWeight={
                                                                'medium'
                                                            }
                                                            isTruncated
                                                        >
                                                            BOTTOM:
                                                        </StatLabel>
                                                        <BottomCategory
                                                            bottomCategory={
                                                                bottomCategory
                                                            }
                                                            setBottomCategory={
                                                                setBottomCategory
                                                            }
                                                        />
                                                    </Stat>
                                                </Box>
                                                <Box
                                                    mx={'auto'}
                                                    pt={5}
                                                    px={{
                                                        base: 2,
                                                        sm: 12,
                                                        md: 17,
                                                    }}
                                                >
                                                    <Stat
                                                        px={{ base: 4, md: 8 }}
                                                        py={'5'}
                                                        shadow={'xl'}
                                                        border={'1px solid'}
                                                        rounded={'lg'}
                                                    >
                                                        <StatLabel
                                                            fontWeight={
                                                                'medium'
                                                            }
                                                            isTruncated
                                                        >
                                                            OUTER:
                                                        </StatLabel>
                                                        <OuterCategory
                                                            outerCategory={
                                                                outerCategory
                                                            }
                                                            setOuterCategory={
                                                                setOuterCategory
                                                            }
                                                        />
                                                    </Stat>
                                                </Box>
                                            </SimpleGrid>
                                            {topCategory === 'T-shirt' ? (
                                                <Tshirt list={list} />
                                            ) : null}
                                            {topCategory === 'Sleeveless' ? (
                                                <Sleeveless list={list} />
                                            ) : null}
                                            {topCategory === 'Shirt' ? (
                                                <Shirt list={list} />
                                            ) : null}
                                            {topCategory === 'Pullover' ? (
                                                <Pullover list={list} />
                                            ) : null}

                                            {bottomCategory === 'Pants' ? (
                                                <Pants list={list} />
                                            ) : null}
                                            {bottomCategory === 'Short' ? (
                                                <Short list={list} />
                                            ) : null}
                                            {bottomCategory === 'Skirt' ? (
                                                <Skirt list={list} />
                                            ) : null}

                                            {outerCategory === 'Blazer' ? (
                                                <Blazer list={list} />
                                            ) : null}
                                            {outerCategory === 'Cardigans' ? (
                                                <Cardigans list={list} />
                                            ) : null}
                                            {outerCategory === 'Coat' ? (
                                                <Coat list={list} />
                                            ) : null}
                                            {outerCategory === 'Jacket' ? (
                                                <Jacket list={list} />
                                            ) : null}
                                        </>
                                    ) : null}

                                    {mainCategory === 'onePiece' ? (
                                        <>
                                            <SimpleGrid
                                                columns={[2, null, 3]}
                                                spacing="40px"
                                                mt={'2rem'}
                                            >
                                                <Box
                                                    mx={'auto'}
                                                    pt={5}
                                                    px={{
                                                        base: 2,
                                                        sm: 12,
                                                        md: 17,
                                                    }}
                                                >
                                                    <Stat
                                                        px={{ base: 4, md: 8 }}
                                                        py={'5'}
                                                        shadow={'xl'}
                                                        border={'1px solid'}
                                                        rounded={'lg'}
                                                    >
                                                        <StatLabel
                                                            fontWeight={
                                                                'medium'
                                                            }
                                                            isTruncated
                                                        >
                                                            ONE PIECE:
                                                        </StatLabel>
                                                        <OnePieceCategory
                                                            onePieceCategory={
                                                                onePieceCategory
                                                            }
                                                            setonePieceCategory={
                                                                setonePieceCategory
                                                            }
                                                        />
                                                    </Stat>
                                                </Box>
                                                <Box></Box>
                                            </SimpleGrid>
                                            {onePieceCategory === 'Dress' ? (
                                                <Dress list={list} />
                                            ) : null}
                                            {onePieceCategory === 'Swimwear' ? (
                                                <Swimsuit list={list} />
                                            ) : null}
                                            {onePieceCategory === 'Overall' ? (
                                                <Overall list={list} />
                                            ) : null}
                                        </>
                                    ) : null}

                                    {mainCategory === 'all' ? (
                                        <All list={list} />
                                    ) : null}
                                </GridItem>
                            </Grid>
                        </div>
                    ))}
        </>
    );
};

export default Closet;
