import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import testimonialsData from '../../data/index.json';

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
     
    ],
  };
 

  return (
    <div className="testimonials-carousel">
      <Slider {...settings}>
        {testimonialsData.testimonial.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="testimonial-content">
              <img src={testimonial.src} alt={`Avatar ${testimonial.id}`} />
              <div className="testimonial-text">
                <strong>{testimonial.author_name}</strong>
              </div>
            </div>
            <p>{testimonial.description}</p>
            <p>{testimonial.author_designation}</p>
          </div>
        ))}
        
      </Slider>
     
      
    </div>
    
    
  );
};

export default TestimonialsCarousel;