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
        breakpoint: 1200,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className='pt-12 max-[1150px]:pt-4 max-[1150px]:pr-8 max-[1150px]:order-3'>
      <div className="flex justify-between items-center px-4 mb-4">
        <p className="font-bold text-2xl px-2">Word Sets</p>
        <div className='flex justify-center items-end -mb-1'>
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
      <div className="py-4 pl-4">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <WordSetItem
            title='Cities and Countries'
            key={1}
            gradient='bg-gradient-to-b from-purple-300 to-indigo-600'
            img='/image/earth.png'
          />
          <WordSetItem
            title='Date and Time'
            key={2}
            gradient='bg-gradient-to-r from-cyan-400 to-blue-500'
            img='/image/time.png'
          />
          <WordSetItem
            title='Animals'
            key={3}
            gradient='bg-gradient-to-r from-teal-200 to-teal-500'
            img='/image/hatch.png'
          />
          <WordSetItem
            title='Numbers'
            key={4}
            gradient='bg-gradient-to-r from-rose-300 to-rose-500'
            img='/image/numbers.png'
          />
        </Slider>
      </div>
    </section>
  );
};

export default WordSets;
