import React, { useState } from 'react';
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselImages from "../API/CarouselImages";

const Carousel = () => {

    const [slideImgs, setSlideImgs] = useState(CarouselImages);
    // eslint-disable-next-line

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <div className="container carousel-container">
                <h1 className='main-heading text-center'>Client's Showcase</h1>
                <div className="carousel-row">
                    <Slider {...settings}>
                        {slideImgs.map((item) => (
                            <div className="col-12 col-lg-4 text-center">
                                <div key={item.id}>
                                    <img src={item.src} alt={item.alt} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Carousel