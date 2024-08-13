import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

export default function Footer() {
  return (
    <div className='flex  items-center justify-between rounded-t-[10px] bg-fundo-painel p-3 px-5 text-xs lg:text-[10px] xl:text-[12px]'>
      <div className='flex flex-col gap-2'>
        <p>developed by Lorenzo-alt</p>
        <p>(11) 98495-1943</p>
      </div>
      <div className='flex gap-2'>
        <FaGithub className='size-[20px] fill-branco-secondario lg:size-[15px] 2xl:size-[20px]' />
        <FaLinkedin className='size-[20px] fill-branco-secondario lg:size-[15px] 2xl:size-[20px]' />
      </div>
    </div>
  );
}
