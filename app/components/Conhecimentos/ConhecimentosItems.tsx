import { Conhecimento } from '@/app/types';
import React from 'react';

export default function ConhecimentosItems(props: Conhecimento) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <img
        src={props.icone.url}
        alt={`Icone-${props.titulo}`}
        className='h-auto w-[40px] transition-all md:w-[60px] lg:w-[40px] xl:w-[50px] 2xl:w-[70px]'
      />
      <span className='font-medium'>{props.titulo}</span>
    </div>
  );
}
