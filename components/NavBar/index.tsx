import Logo from '@/public/logo-porti.svg';
import React from 'react';

import Footer from '../Footer';
import NavBarOptions from './NavBarOptions';

export default function index() {
  return (
    <section className='flex max-h-screen w-full flex-col items-center gap-2 bg-fundo-navbar lg:max-w-[320px] xl:pt-5 2xl:max-w-[420px] 2xl:pt-8'>
      <div>
        <Logo viewBox='0 0 243 237' className='h-auto w-[210px] 2xl:h-max 2xl:w-max' />
      </div>
      <NavBarOptions />
      {/* <ThemeToggle /> */}
      <div className='mt-12 flex max-w-[290px] flex-col gap-2 overflow-y-auto pb-10 leading-relaxed text-branco-padrao lg:mt-10 lg:pb-0 2xl:mt-16 2xl:max-w-[360px]'>
        <h1 className='text-center text-[14px] 2xl:text-[16px]'>
          Olá! Sou Lorenzo e sou {''}
          <span className='text-[22px] font-bold text-azul-padrao 2xl:text-[30px]'>Software Engineer Full Stack</span>
        </h1>
        <p className='text-center text-[14px] 2xl:text-[16px]'>
          Tenho 24 anos e sou recem formado bacharel em ciência da computação, tive meu primeiro contato com programação
          para essa formação e desde lá me apaixonei em resolver problemas e criar produtos de software valiosos.
        </p>
      </div>
      <div className='mt-auto hidden w-full lg:block'>
        <Footer />
      </div>
    </section>
  );
}
