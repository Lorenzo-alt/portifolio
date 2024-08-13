'use client';
import { ProjetoModel } from '@/app/types';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import EstudoDeCaso from './EstudoDeCaso';
import SwiperProj from './SwiperProj';
import Title from '../Title';

type typeProps = {
  dados: ProjetoModel;
};

export default function Projeto(props: typeProps) {
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
      <Title titulo={props.dados.titulo} />
      <SwiperProj dados={props.dados.mocks} />
      <EstudoDeCaso {...props.dados} />
    </motion.div>
  );
}
