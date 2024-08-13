'use client';
import { Projeto } from '@/app/types';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

type typeProps = {
  dados: Projeto;
};

export default function ProjetosItems(props: typeProps) {
  const [inHover, setInHover] = useState<boolean>(false);
  return (
    <Link
      href={'projetos/' + props.dados.projetoModel?.url ?? ''}
      onMouseEnter={() => setInHover(true)}
      onMouseLeave={() => setInHover(false)}
      className='relative grid grid-cols-2 overflow-hidden rounded-[10px] bg-gradient-to-b from-grad-0 to-grad-1 transition-all sm:w-min sm:min-w-[600px] lg:h-[260px] lg:min-w-[650px] lg:max-w-[880px] xl:h-[260px] xl:min-w-[800px] 2xl:h-[300px] 2xl:w-full'
    >
      <div className='col-span-2 flex flex-col gap-2 p-5 transition-all lg:col-auto lg:pl-10 2xl:gap-4'>
        <h2 className='text-[20px] font-bold transition-all lg:text-[16px] 2xl:text-[20px]'>
          <p className='line-clamp-2 min-h-[calc(2*1.25rem)] truncate text-wrap leading-6'>
            {props.dados.projetoModel?.titulo}
          </p>
        </h2>
        <div>
          <span className='font-semibold transition-all lg:text-[14px] 2xl:text-[16px]'>Feito com: </span>
        </div>
        <span
          className='truncate-multiline text-[14px] transition-all lg:text-[12px] 2xl:text-[14px]'
          dangerouslySetInnerHTML={{ __html: props.dados.projetoModel?.descricao.html ?? '' }}
        ></span>
        <div className='mt-4 flex w-max gap-4 text-base transition-all lg:text-[14px] 2xl:text-[16px]'>
          <button className='flex w-max items-center gap-2 rounded-full  bg-branco-terciario p-0.5 px-5 font-semibold text-black transition-all 2xl:p-1 2xl:px-5'>
            <FaArrowUpRightFromSquare fill='black' className='size-3 transition-all 2xl:size-4' />
            Live
          </button>
          <button className='flex w-max items-center gap-2 rounded-full  border-2 border-branco-terciario p-0.5 px-5 font-semibold transition-all 2xl:p-1 2xl:px-5'>
            <FaGithub fill='white' className='size-3 transition-all 2xl:size-4' /> Github
          </button>
        </div>
      </div>

      <div className='hidden overflow-hidden lg:block'>
        {props.dados.projetoModel?.mocks.mockBrowser1?.url && props.dados.projetoModel?.mocks.mockMobile1?.url && (
          <>
            <img
              alt='Mock-Browser'
              src={props.dados.projetoModel?.mocks.mockBrowser1?.url}
              className={twMerge(
                'ml-14 mt-16 h-auto min-w-[420px] shadow-2xl shadow-black transition-all xl:ml-20 xl:mt-12 xl:min-w-[500px] 2xl:min-w-[600px]',
                inHover && 'ml-10 mt-10 -rotate-3 xl:ml-16 xl:mt-8',
              )}
            />
            <img
              alt='Mock-Browser'
              src={props.dados.projetoModel?.mocks.mockMobile1?.url}
              className={
                'absolute right-5 h-auto w-14 shadow-[rgba(0,_0,_0,_0)_0px_3px_10px] shadow-black transition-all xl:w-16 2xl:w-20'
              }
              style={{ bottom: inHover ? '1.25rem' : '-12rem', opacity: inHover ? '100' : '0' }}
            />
          </>
        )}
      </div>
    </Link>
  );
}
