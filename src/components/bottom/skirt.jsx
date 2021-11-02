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
import SkirtMobile from './mobile/skirt';

const Skirt = ({ list }) => {
    SwiperCore.use([Keyboard, Mousewheel, Autoplay, Navigation, EffectFade]);

    const size = ScreenDetection();

    if (size.width < 550) {
        return <SkirtMobile list={list} />;
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
                {list.skirt && list.skirt.length === 0 ? (
                    <>
                        <h1 className="text-center" style={{ padding: '2rem' }}>
                            You have no skirts!
                        </h1>
                    </>
                ) : null}

                <>
                    {list.skirt &&
                        list.skirt.map((item) => (
                            <SwiperSlide key={item.id}>
                                <SimpleGrid
                                    columns={2}
                                    borderLeft="1px solid black"
                                >
                                    <Box p={2}>
                                        <img
                                            src={item.image}
                                            alt="skirt"
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

export default Skirt;
