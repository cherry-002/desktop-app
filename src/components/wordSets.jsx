import React, { useRef } from 'react';
import WordSetItem from './wordSetItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const WordSets = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section>
      <div className="flex justify-between items-center">
        <p className="font-extrabold text-2xl">Word sets</p>
        <div>
          <button onClick={previous}>
            <IoIosArrowBack
              fontSize={20}
              className="hover:text-gray-500 duration-300"
            />
          </button>
          <button onClick={next}>
            <IoIosArrowForward
              fontSize={20}
              className="hover:text-gray-500 duration-300"
            />
          </button>
        </div>
      </div>
      <div className="slider-container py-4">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <WordSetItem
            title
            key={1}
            gradient='bg-gradient-to-b from-purple-300 to-indigo-600'
          />
          <WordSetItem
            title
            key={2}
            gradient='bg-gradient-to-r from-cyan-400 to-blue-500'
          />
          <WordSetItem
            title
            key={3}
            gradient='bg-gradient-to-r from-teal-200 to-teal-500'
          />
          <WordSetItem
            title
            key={4}
            gradient='bg-gradient-to-r from-rose-300 to-rose-500'
          />
        </Slider>
      </div>
    </section>
  );
};

export default WordSets;
