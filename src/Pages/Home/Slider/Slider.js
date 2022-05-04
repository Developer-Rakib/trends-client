import React from 'react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from 'react-reveal';
import "./Slider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
                <SwiperSlide>
                    <div className='slider1'>
                        <Fade top>
                            <div className='slider-text'>
                                <h2 className="sm:text-2xl text-xl">Men's clothes</h2>
                                <p className='sm:max-w-3xl max-w-xl text-sm sm:text-base mx-auto'>Men's clothes are articles of clothing designed for and worn by men. Typical men's clothes include trousers, shirts, jeans, suits, sweaters, gloves, jackets, and hats. However, the majority of those clothing items are also items of women's clothing.</p>
                            </div>
                        </Fade>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider2'>
                        <div className='slider-text'>
                            <h2 className="sm:text-2xl text-xl">Women’s Clothes</h2>
                            <p className='sm:max-w-3xl max-w-xl text-sm sm:text-base mx-auto'>There are so many terms for women’s clothing, they boggle the mind–dolmen sleeves, pencil skirt, choker, colorblock. The best conjure up colorful images that share with a few words a glorious picture that sticks in your mind as the character walks through the scene.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider3'>
                        <div className='slider-text'>
                            <h2 className="sm:text-2xl text-xl">Kids Clothes</h2>
                            <p className='sm:max-w-3xl max-w-xl text-sm sm:text-base mx-auto'>From the cutest clothes to baby essentials, you’ll find it all at Macy’s kids shop. Whether you’re shopping for a baby shower gift or stocking up on goodies for your own, we’ve got you covered. Look for kids apparel ranging from newborns to toddlers and beyond, toys, and tools for helping mom and dad out.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider4'>
                        <div className='slider-text'>
                            <h2 className="sm:text-2xl text-xl">Older Mens Clothes</h2>
                            <p className='sm:max-w-3xl max-w-xl text-sm sm:text-base mx-auto'>So what looks good on an older gentleman? Comfortable, well-fitted clothes, same as on any other man. Classic styles are going to work better than fashion-forward runway experiments, of course — they look “timeless,” which is a really great word to have associated with you as you get older.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider5'>
                        <div className='slider-text'>
                            <h2 className="sm:text-2xl text-xl">Older Womens Clothes</h2>
                            <p className='sm:max-w-3xl max-w-xl text-sm sm:text-base mx-auto'>we know, many trends are geared for the younger generation. Example: very few people over the age of 14 can wear neon leggings. But it’s the seasoned fashionista who can exude real style, which is something very different from being ‘on-trend.’ If you’ve crossed the 60-year mark and still want to keep it poppin’, here are some tips on how to do it.</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;