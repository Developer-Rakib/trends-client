import React from 'react';
import slider1 from '../../../img/banner1.jpg'
import slider2 from '../../../img/banner2.jpg'
import slider3 from '../../../img/banner3.jpg'
import slider4 from '../../../img/banner4.jpg'
import slider5 from '../../../img/banner5.jpg'
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
    return (
        <div className='slider-container'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div><img src={slider1} alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src={slider2} alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src={slider3} alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src={slider4} alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src={slider5} alt="" /></div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;