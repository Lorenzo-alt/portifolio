import ProjetosIcon from '@/public/projetos-icon.svg';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPaperclip } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';

import ButtonNav from './ButtonNav';

const dados = [
  {
    nome: 'Home',
    style: 'mt-[8px] rotate-[-6deg]',
    link: '/',
    icon: <FaHome className='size-[16px] fill-branco-secondario 2xl:size-[20px]' />,
  },
  {
    nome: 'Curriculo',
    style: 'mt-[2px] rotate-[-3deg]',
    link: '/Curriculum.pdf',
    icon: <FaPaperclip className='size-[16px] fill-branco-secondario 2xl:size-[20px]' />,
  },
  {
    nome: 'Projetos',
    link: '/projetos',
    icon: <ProjetosIcon className='size-[16px] fill-branco-secondario 2xl:size-[20px]' />,
  },
  {
    nome: 'Github',
    style: 'mt-[2px] rotate-[3deg]',
    link: 'https://github.com/Lorenzo-alt',
    icon: <FaGithub className='size-[16px] fill-branco-secondario 2xl:size-[20px]' />,
  },
  {
    nome: 'Linkedin',
    style: 'mt-[8px] rotate-[6deg]',
    link: 'https://www.linkedin.com/in/lorenzo-juliati-46b918196/',
    icon: <FaLinkedin className='size-[16px] fill-branco-secondario 2xl:size-[20px]' />,
  },
];

export default function NavBarOptions() {
  return (
    <div className='flex gap-5'>
      {dados.map((item, index) => {
        return <ButtonNav {...item} key={index} />;
      })}
    </div>
  );
}
