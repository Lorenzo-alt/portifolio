import { Conhecimento } from '@/app/types';
import Image from 'next/image';
import React from 'react';

export default function ConhecimentosItems(props: Conhecimento) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <Image
        src={props.icone.url}
        alt={`Icone-${props.titulo}`}
        width={10}
        height={10}
        className='h-auto w-[40px] transition-all md:w-[60px] lg:w-[40px] xl:w-[50px] 2xl:w-[70px]'
      />
      <span className='font-medium'>{props.titulo}</span>
    </div>
  );
}
