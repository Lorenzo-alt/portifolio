'use client';
import { Projeto } from '@/app/types';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import Title from '../Title';
import ProjetosItems from './ProjetosItems';

type typeProps = {
  dados: Projeto[];
};

export default function Projetos(props: typeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      ref={ref}
      className='flex w-full flex-col items-center gap-5'
    >
      <Title titulo='projetos' />
      {props.dados.map((projeto, index) => (
        <ProjetosItems dados={projeto} key={index} />
      ))}
    </motion.div>
  );
}
