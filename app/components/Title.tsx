import React from 'react';

type typeProps = {
  titulo: string;
};

export default function Title(props: typeProps) {
  return (
    <span className='flex text-[24px] font-bold text-azul-padrao 2xl:text-[28px]'>
      {'{'}
      <h1>{props.titulo}</h1>
      {'}'}
    </span>
  );
}
