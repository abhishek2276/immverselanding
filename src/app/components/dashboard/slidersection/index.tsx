'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './ImageSlider.module.css';

const sliderImages = [
  {
    id: 1,
    desktop: '/slider/sliderd1.svg',
    tablet: '/slider/sliderd1.svg',
    mobile: '/slider/sliderm1.svg',
    btnColor: 'white',
    textcolor:'#D71D89'
  },
  {
    id: 2,
    desktop: '/slider/sliderd2.svg',
    tablet: '/slider/sliderd2.svg',
    mobile: '/slider/sliderm2.svg',
    btnColor: '#FFFFFF1A',
    textcolor:'white'
  },
  {
    id: 3,
    desktop: '/slider/sliderd3.svg',
    tablet: '/slider/sliderd3.svg',
    mobile: '/slider/sliderm3.svg',
    btnColor: 'white',
    textcolor:'#FFA209'
  },
];

export default function ImageSlider() {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        spaceBetween={30}
        slidesPerView={1}
        className={styles.swiper}
      >
        {sliderImages.map((img, index) => (
          <SwiperSlide key={img.id}>
            <div className={styles.slideWrapper}>
              <picture>
                <source media="(min-width: 1024px)" srcSet={img.desktop} />
                <source media="(min-width: 768px)" srcSet={img.tablet} />
                <Image
                  src={img.mobile}
                  alt={`Slide ${index + 1}`}
                  width={960}
                  height={350}
                  className={styles.slideImage}
                  priority
                />
              </picture>
              <button
                className={styles.registerBtn}
                style={{ backgroundColor: img.btnColor,color:img.textcolor }}
              >
                Register Now!
              </button>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Chevron Arrows */}
        <div className={`${styles.customNav} ${styles.prevArrow} custom-prev`}>
          <ChevronLeft className={styles.chevronIcon} />
        </div>
        <div className={`${styles.customNav} ${styles.nextArrow} custom-next`}>
          <ChevronRight className={styles.chevronIcon} />
        </div>
      </Swiper>

      <div className={styles.bottomButtonWrapper}>
        <button className={styles.exploreBtn}>
          Explore how our innovative solutions
        </button>
      </div>
    </div>
  );
}
