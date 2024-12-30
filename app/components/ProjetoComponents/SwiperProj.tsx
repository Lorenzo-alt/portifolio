'use client';
import Image from 'next/image';
import React from 'react';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { twMerge } from 'tailwind-merge';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type typeProps = {
  dados: {
    mockBrowser1: {
      url: string;
    };
    mockBrowser2: {
      url: string;
    };
    mockBrowser3: {
      url: string;
    };
    mockMobile1: {
      url: string;
    };
    mockMobile2: {
      url: string;
    };
  };
};

export default function SwiperProj(props: typeProps) {
  return (
    <div className='relative w-full rounded-[10px] bg-gradient-to-b from-grad-0 to-grad-1 p-2.5 transition sm:max-w-[600px] lg:max-w-[650px] xl:max-w-[800px] 2xl:max-w-[880px]'>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        initialSlide={0}
        autoplay={{ delay: 11000 }}
        navigation={true}
        // @ts-expect-error error ignonarel
        style={{ '--swiper-navigation-size': '24px' }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className='flex h-full w-full items-center justify-center text-center font-semibold text-white'
      >
        <SwiperSlide className={twMerge('flex w-full items-center justify-center bg-cover')}>
          <Image
            alt='Mock-Browser'
            src={props.dados.mockBrowser1?.url}
            height={0}
            width={1980}
            className={twMerge('')}
          />
        </SwiperSlide>
        <SwiperSlide className={twMerge('flex w-full items-center justify-center bg-cover')}>
          <Image
            alt='Mock-Browser'
            src={props.dados.mockBrowser2?.url}
            height={0}
            width={1980}
            className={twMerge('')}
          />
        </SwiperSlide>
        <SwiperSlide className={twMerge('flex w-full items-center justify-center bg-cover')}>
          <Image
            alt='Mock-Browser'
            src={props.dados.mockBrowser3?.url}
            height={0}
            width={1980}
            className={twMerge('')}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
