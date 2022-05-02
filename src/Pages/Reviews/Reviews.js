import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Reviews..css";

// import required modules
import { EffectCoverflow, Autoplay, Pagination, } from "swiper";


const Reviews = () => {
    return (
        <div className='w-10/12 mx-auto review-containe'>
            <Swiper
                // effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='py-4 sm:py-10'>
                        <div className='reveiw'>
                            <p className=''>Was a little nervous to order because company out of USA. But boy am I glad I did!.The clothing is true to size, fabrics are great and styles up to date and GREAT prices. Glad I took the chance, now I'm a happy returning customer.</p>
                            <div className="clint-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitQFULL43fS7WN6KzGYOCDGhG1OPsXFAV40p9eLMNaA&s" alt="" />
                            </div>
                            <h3>Sultan Dryden</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-4 sm:py-10'>
                        <div className='reveiw'>
                            <p className=''> completely love this site, found it on EBay at first now I just order directly through them...I am always complemented on my outfits I will be back for more...Thank you for having cute trendy clothes that fit and look good. </p>
                            <div className="clint-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU" alt="" />
                            </div>


                            <h3>K. Smith</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-4 sm:py-10'>
                        <div className='reveiw'>
                            <p className=''>OMG..great store !!! Found this store while visiting the UK.. what a find -nice clothing/well made/great prices. I never find anything I Iike in US plus size stores but I could have filled another suitcase in Yours* Will be shopping on this site from now on.</p>
                            <div className="clint-img">
                                <img src="https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2018/07/Kevin-Dedner.jpg" alt="" />
                            </div>
                            <h3>Coelho</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-4 sm:py-10'>
                        <div className='reveiw'>
                            <p className=''>I have always hated shopping for clothes. Nothing ever fits right and all I want to do is cry. I always feel that people that are a 14 or smaller had it made and even though I'm not a big woman, like many, I have a few areas that some.</p>
                            <div className="clint-img">
                                <img src="https://artidis.com/wp-content/uploads/2022/02/papa_diogop_ndiaye-400x400-1.jpg" alt="" />
                            </div>
                            <h3>Yasin</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-4 sm:py-10'>
                        <div className='reveiw'>
                            <p className=''>I just received my shirts in TWO days I am incredibly happy with your quickness and the beautiful clothes! I will be shopping through you again in the very near future and will recommend you to everyone I know! So very happy I found</p>
                            <div className="clint-img">
                                <img src="https://blogs-images.forbes.com/files/2018/11/jonburgos_avatar_1541731417-400x400.jpg" alt="" />
                            </div>
                            <h3>Mishu</h3>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Reviews;