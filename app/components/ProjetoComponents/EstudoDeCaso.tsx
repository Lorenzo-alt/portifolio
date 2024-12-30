import { ProjetoModel } from '@/app/types';
import DOMPurify from 'dompurify';
import Image from 'next/image';
import React from 'react';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

export default function EstudoDeCaso(props: ProjetoModel) {
  const safeDescHTML = DOMPurify.sanitize(props.descricao.html);

  return (
    <div className='relative flex w-full grid-cols-4 flex-col rounded-[10px] bg-gradient-to-b from-grad-0 to-grad-1 p-5 transition sm:max-w-[600px] lg:grid lg:max-w-[650px] lg:px-10 xl:max-w-[800px] 2xl:max-w-[880px]'>
      <div
        className={twMerge(
          'flex flex-col gap-2 transition-all lg:col-span-4 2xl:gap-4',
          props.mocks.mockMobile1?.url && 'lg:col-span-3',
        )}
      >
        <h3 className='text-[20px] font-bold transition-all lg:text-[16px] 2xl:text-[20px]'>Descrição:</h3>
        <p
          className='flex flex-col text-[14px] transition-all lg:text-[12px] 2xl:text-[14px]'
          dangerouslySetInnerHTML={{ __html: safeDescHTML }}
        ></p>
        <h3 className='text-[20px] font-bold transition-all lg:text-[16px] 2xl:text-[20px]'>Ficha tecnica:</h3>
        <div className='flex w-full flex-wrap'>
          {props.fichaTecnica.map((item, index) => (
            <div key={index} className='m-1 flex items-center gap-2 border p-2 text-[12px]'>
              {item.titulo}
              <Image
                src={item.icone.url}
                alt={`Icone-${item.titulo}`}
                height={0}
                width={0}
                className='h-auto w-[20px] transition-all'
              />
            </div>
          ))}
        </div>
        <div className='mt-4 flex w-max gap-4 text-base transition-all lg:text-[14px] 2xl:text-[16px]'>
          <a
            href={props.urlLive}
            onClick={(e) => {
              e.preventDefault();
              window.open(props.urlLive, '_blank');
            }}
            target='_blank'
            rel='noopener noreferrer'
            className='flex w-max items-center gap-2 rounded-full  bg-branco-terciario p-0.5 px-5 font-semibold text-black transition-all 2xl:p-1 2xl:px-5'
          >
            <FaArrowUpRightFromSquare fill='black' className='size-3 transition-all 2xl:size-4' />
            Live
          </a>
          <a
            href={props.urlGit}
            onClick={(e) => {
              e.preventDefault();
              window.open(props.urlGit, '_blank');
            }}
            target='_blank'
            rel='noopener noreferrer'
            className='flex w-max items-center gap-2 rounded-full  border-2 border-branco-terciario p-0.5 px-5 font-semibold transition-all 2xl:p-1 2xl:px-5'
          >
            <FaGithub fill='white' className='size-3 transition-all 2xl:size-4' /> Github
          </a>
        </div>
      </div>
      {props.mocks.mockMobile1?.url && (
        <div className='hidden w-full flex-col items-end gap-5 pr-5 lg:flex'>
          <>
            <Image
              src={props.mocks.mockMobile1.url}
              alt={`Mockmobile1-${props.titulo}`}
              height={0}
              width={0}
              className='h-auto w-[80px] rotate-12 transition-all'
            />
            <Image
              src={props.mocks.mockMobile2.url}
              alt={`Mockmobile2-${props.titulo}`}
              height={0}
              width={0}
              className='h-auto w-[80px] rotate-12 transition-all'
            />
          </>
        </div>
      )}
    </div>
  );
}
