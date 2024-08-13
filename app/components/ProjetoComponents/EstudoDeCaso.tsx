import { ProjetoModel } from '@/app/types';
import React from 'react';

export default function EstudoDeCaso(props: ProjetoModel) {
  return (
    <div className='relative flex w-full grid-cols-3 flex-col rounded-[10px] bg-gradient-to-b from-grad-0 to-grad-1 p-2.5 transition sm:max-w-[600px] lg:grid lg:max-w-[650px] xl:max-w-[800px] 2xl:max-w-[880px]'>
      <div className='flex flex-col gap-2 p-5 transition-all lg:col-span-2 lg:pl-10 2xl:gap-4'>
        <h3 className='text-[20px] font-bold transition-all lg:text-[16px] 2xl:text-[20px]'>Descrição:</h3>
        <p
          className='text-[14px] transition-all lg:text-[12px] 2xl:text-[14px]'
          dangerouslySetInnerHTML={{ __html: props.descricao.html }}
        ></p>
        <h3 className='text-[20px] font-bold transition-all lg:text-[16px] 2xl:text-[20px]'>Ficha tecnica:</h3>
        <div className='flex w-full flex-wrap'>
          {props.fichaTecnica.map((item, index) => (
            <div key={index} className='m-1 flex items-center gap-2 border p-2 text-[12px]'>
              {item.titulo}
              <img src={item.icone.url} alt={`Icone-${item.titulo}`} className='h-auto w-[20px] transition-all' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
