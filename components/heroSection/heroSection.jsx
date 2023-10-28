"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'
import parallexImg1 from '../../assets/parallexImg1.png'
// import carouselImg2 from '../../assets/carousel2.jpg'
// import carouselImg3 from '../../assets/carousel3.jpg'
// import carouselImg4 from '../../assets/carousel4.jpg'


export const HeroSection = () => {
    return (
        <React.Fragment>
            <section>
                <div className="heroSection">
                    <div className="parralexSection">
                        
                        <Image src={parallexImg1} />
                    </div>
                </div>
                {/* <div className="carousel-container">


                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="carouselSlider">
                            <Image src={carouselImg1} alt="Slide 1" />
                        </SwiperSlide>
                        <SwiperSlide className="carouselSlider">
                            <Image src={carouselImg2} alt="Slide 2" />
                        </SwiperSlide>
                        <SwiperSlide className="carouselSlider">
                            <Image src={carouselImg3} alt="Slide 3" />
                        </SwiperSlide>
                        <SwiperSlide className="carouselSlider">
                            <Image src={carouselImg4} alt="Slide 3" />
                        </SwiperSlide>
                    </Swiper>
                </div> */}
            </section>
        </React.Fragment>
    )
}
