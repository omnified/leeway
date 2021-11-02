import React from 'react';

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

const PantsMobile = ({ list }) => {
    SwiperCore.use([Keyboard, Mousewheel, Autoplay, Navigation, EffectFade]);

    return (
        <>
            <Swiper
                className="swiper-container"
                spaceBetween={0}
                slidesPerView={1}
                mousewheel={true}
                keyboard={true}
                loop={true}
            >
                {list.pants && list.pants.length === 0 ? (
                    <>
                        <h1 className="text-center" style={{ padding: '2rem' }}>
                            You have no pants!
                        </h1>
                    </>
                ) : null}

                <>
                    {list.pants &&
                        list.pants.map((item) => (
                            <SwiperSlide key={item.id}>
                                <SimpleGrid
                                    columns={2}
                                    borderLeft="1px solid black"
                                >
                                    <Box p={2}>
                                        <img
                                            src={item.image}
                                            alt="pants"
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

export default PantsMobile;
