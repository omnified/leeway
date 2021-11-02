import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Pants from '../components/bottom/pants';
import Short from '../components/bottom/short';
import Skirt from '../components/bottom/skirt';
import Dress from '../components/onePiece/dress';
import Overall from '../components/onePiece/overall';
import Swimsuit from '../components/onePiece/swimwear';
import Blazer from '../components/outer/blazer';
import Cardigans from '../components/outer/cardigans';
import Coat from '../components/outer/coat';
import Jacket from '../components/outer/jacket';
import Pullover from '../components/top/pullover';
import Shirt from '../components/top/shirt';
import Sleeveless from '../components/top/sleeveless';
import Tshirt from '../components/top/t-shirt';

const All = ({ list }) => {
    const tshirtLength = list.tShirt;
    const shirtLength = list.shirt;
    const coatLength = list.coat;
    const dressLength = list.dress;
    const pantsLength = list.pants;
    const skirtLength = list.skirt;
    const blazerLength = list.blazer;
    const jacketLength = list.jacket;
    const shortsLength = list.shorts;
    const overallLength = list.overall;
    const sweaterLength = list.sweater;
    const cardiganLength = list.cardigan;
    const swimwearLength = list.swimwear;
    const sleevelessLength = list.sleeveless;

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(
            tshirtLength.length +
                shirtLength.length +
                coatLength.length +
                dressLength.length +
                pantsLength.length +
                skirtLength.length +
                blazerLength.length +
                jacketLength.length +
                shortsLength.length +
                overallLength.length +
                sweaterLength.length +
                cardiganLength.length +
                swimwearLength.length +
                sleevelessLength.length
        );
    }, [
        tshirtLength.length,
        shirtLength.length,
        coatLength.length,
        dressLength.length,
        pantsLength.length,
        skirtLength.length,
        blazerLength.length,
        jacketLength.length,
        shortsLength.length,
        overallLength.length,
        sweaterLength.length,
        cardiganLength.length,
        swimwearLength.length,
        sleevelessLength.length,
    ]);

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h1 style={{ fontSize: '25px' }}>
                    Total Items: <strong>{total}</strong>
                </h1>
            </div>
            <br />

            {/* TOP */}

            {tshirtLength && tshirtLength?.length > 0 ? (
                <>
                    <Tshirt list={list} />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total Items: <strong>{tshirtLength?.length}</strong>
                    </Box>
                    <hr />
                    <br />
                </>
            ) : null}

            {shirtLength && shirtLength?.length > 0 ? (
                <>
                    <Shirt list={list} />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total Items: <strong>{shirtLength?.length}</strong>
                    </Box>
                    <hr />
                    <br />
                </>
            ) : null}

            {sleevelessLength && sleevelessLength?.length > 0 ? (
                <>
                    <Sleeveless list={list} />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total Items: <strong>{sleevelessLength?.length}</strong>
                    </Box>
                    <hr />
                    <br />
                </>
            ) : null}

            {sweaterLength && sweaterLength?.length > 0 ? (
                <>
                    <Pullover list={list} />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total Items: <strong>{sweaterLength?.length}</strong>
                    </Box>
                    <hr />
                    <br />
                </>
            ) : null}

            {/* BOTTOM */}

            {pantsLength && pantsLength?.length > 0 ? (
                <>
                    <Pants list={list} />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total Items: <strong>{pantsLength?.length}</strong>
                    </Box>
                    <hr />
                    <br />
                </>
            ) : null}
            {skirtLength && skirtLength?.length > 0 ? (
                <>
                    <Skirt list={list} />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total Items: <strong>{skirtLength?.length}</strong>
                    </Box>
                    <hr />
                    <br />
                </>
            ) : null}

            {shortsLength && shortsLength?.length > 0 ? (
                <>
                    <Short list={list} />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total Items: <strong>{shortsLength?.length}</strong>
                    </Box>
                    <hr />
                    <br />
                </>
            ) : null}

            {/* OUTER */}

            {cardiganLength && cardiganLength?.length > 0 ? (
                <>
                    <Cardigans list={list} />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total Items: <strong>{cardiganLength?.length}</strong>
                    </Box>
                    <hr />
                    <br />
                </>
            ) : null}

            {blazerLength && blazerLength?.length > 0 ? (
                <>
                    <Blazer list={list} />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total Items: <strong>{blazerLength?.length}</strong>
                    </Box>
                    <hr />
                    <br />
                </>
            ) : null}

            {coatLength && coatLength?.length > 0 ? (
                <>
                    <Coat list={list} />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total Items: <strong>{coatLength?.length}</strong>
                    </Box>
                    <hr />
                    <br />
                </>
            ) : null}

            {jacketLength && jacketLength?.length > 0 ? (
                <>
                    <Jacket list={list} />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total Items: <strong>{jacketLength?.length}</strong>
                    </Box>
                    <hr />
                    <br />
                </>
            ) : null}

            {/* ONE PIECE */}

            {overallLength && overallLength?.length > 0 ? (
                <>
                    <Overall list={list} />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total Items: <strong>{overallLength?.length}</strong>
                    </Box>
                    <hr />
                    <br />
                </>
            ) : null}

            {swimwearLength && swimwearLength?.length > 0 ? (
                <>
                    <Swimsuit list={list} />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total Items: <strong>{swimwearLength?.length}</strong>
                    </Box>
                    <hr />
                    <br />
                </>
            ) : null}

            {dressLength && dressLength?.length > 0 ? (
                <>
                    <Dress list={list} />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total Items: <strong>{dressLength?.length}</strong>
                    </Box>
                    <hr />
                    <br />
                </>
            ) : null}
        </>
    );
};

export default All;
