import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Keyboard,
    Mousewheel,
    Autoplay,
    Navigation,
    EffectFade,
} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import ScreenDetection from '../../helpers/screenDetection';
import ShortMobile from './mobile/short';

const Short = ({ list }) => {
    SwiperCore.use([Keyboard, Mousewheel, Autoplay, Navigation, EffectFade]);

    const size = ScreenDetection();

    if (size.width < 550) {
        return <ShortMobile list={list} />;
    }

    return (
        <>
            <Swiper
                className="swiper-container"
                spaceBetween={0}
                slidesPerView={3}
                mousewheel={true}
                keyboard={true}
                loop={false}
            >
                {list.shorts && list.shorts.length === 0 ? (
                    <>
                        <h1 className="text-center" style={{ padding: '2rem' }}>
                            You have no shorts!
                        </h1>
                    </>
                ) : null}

                <>
                    {list.shorts &&
                        list.shorts.map((item) => (
                            <SwiperSlide key={item.id}>
                                <SimpleGrid
                                    columns={2}
                                    borderLeft="1px solid black"
                                >
                                    <Box p={2}>
                                        <img
                                            src={item.image}
                                            alt="shorts"
                                            width="150px"
                                        />
                                    </Box>
                                    <Box p={2} m={0} textAlign="left">
                                        <Text fontSize={15}> {item.name}</Text>
                                    </Box>
                                </SimpleGrid>
                            </SwiperSlide>
                        ))}
                </>
            </Swiper>
        </>
    );
};

export default Short;
