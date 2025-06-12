import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Service({ services }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true
    };
    return (
        <div>
            <div class="service ">
                <h4>OUR SERVICES</h4>
                {/* <section className="services-section">
            <h2 className="section-title">Our Services</h2> */}
              <div className="container services-grid_change" style={{ paddingTop: '20px' }}>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        loop={true}
                        autoplay={true}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        className="mySwiper">
                        {services.map((service, index) => (
                            <SwiperSlide key={index} className="service-card">
                                <img src={service.imageUrl} alt={service.title} />
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>
                {/* </section> */}

            </div>

        </div>
    )
}

export default Service
