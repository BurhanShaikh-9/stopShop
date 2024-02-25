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
import parallexImg1 from '../../../assets/parallexImg1.png'
// import { url } from 'inspector';
import carouselImg1 from '../../../assets/carousel1.jpg'
// import carouselImg3 from '../../assets/carousel3.jpg'
// import carouselImg4 from '../../assets/carousel4.jpg'


export const HeroSection = () => {
    return (
        <React.Fragment>
            <div>
                <div className="heroSection">
                    <Image className='heroSectionImg'
                        alt="carouselImage"
                        src={carouselImg1}
                    />
                    <div className="parralexSection  parallaxElement">

                        <Image className='img1' src={parallexImg1} alt='paralexImage' />
                        {/* <Image className='img2' src={parallexImg1} alt='paralexImage' /> */}
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
            </div>
        </React.Fragment>
    )
}
