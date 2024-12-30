'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

type typeProps = {
  nome: string;
  style?: string;
  link: string;
  icon: JSX.Element;
};

export default function ButtonNav(props: typeProps) {
  const [inHover, setInHover] = useState<boolean>(false);
  const openInAnotherTab = ['Curriculo', 'Linkedin', 'Github'].includes(props.nome);
  const [handleClick, setHandleClick] = useState<boolean>(false);

  useEffect(() => {
    if (handleClick) {
      if (props.link == '/projetos') {
        const element = document.getElementById('ProjetosSector');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setHandleClick(false);
        }
      }
    }
  }, [handleClick, props.link]);

  return (
    <Link
      href={props.link == '/projetos' || props.link == '/curriculo' ? '/' : props.link}
      target={openInAnotherTab ? '_blank' : undefined}
      rel={openInAnotherTab ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setInHover(true)}
      onMouseLeave={() => setInHover(false)}
      onClick={() => setHandleClick(true)}
      className={twMerge(
        'relative flex size-[40px] cursor-pointer items-center justify-center rounded-[10px] bg-fundo-painel transition-all 2xl:size-[50px]',
        props.style,
        inHover && 'bg-fundo-painel-hover ring ring-branco-secondario',
      )}
    >
      {props.icon}
      <div
        className={twMerge(
          'absolute -bottom-8 flex cursor-pointer items-center justify-between gap-1 rounded-full bg-branco-secondario p-1 px-3 opacity-100 transition-all lg:-bottom-10',
          !inHover && 'pointer-events-none opacity-0',
        )}
      >
        <p className='text-[8px] text-black 2xl:text-[12px]'>{props.nome}</p>
        <FaArrowUpRightFromSquare fill='black' className='size-2 2xl:size-3' />
      </div>
    </Link>
  );
}
