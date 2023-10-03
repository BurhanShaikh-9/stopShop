"use client"
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'
import carouselImg from '../../assets/carousel1.jpg'

export const HeroSection = () => {
    return (
        <React.Fragment>
            <div className="carousel-container">
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={3000}
                >
                    <div className="carouselSlider">
                        <Image src={carouselImg} alt="Slide 1" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div className="carouselSlider">
                        <Image src={carouselImg} alt="Slide 2" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div className="carouselSlider">
                        <Image src={carouselImg} alt="Slide 3" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        </React.Fragment>
    )
}
