'use client';
import { SessaoConhecimentos } from '@/app/types';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import Title from '../Title';
import ConhecimentosItems from './ConhecimentosItems';

type typeProps = {
  dados: SessaoConhecimentos;
};

export default function Conhecimentos(props: typeProps) {
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
      <Title titulo='conhecimentos' />
      <div className='grid w-full grid-cols-3 items-center justify-center gap-12 gap-y-3 rounded-[10px] bg-gradient-to-b from-grad-0 to-grad-1 p-10 text-[10px] transition-all sm:w-min sm:min-w-[600px] md:text-[12px] lg:min-w-[650px] lg:max-w-[880px] lg:grid-cols-6 lg:gap-8 lg:gap-y-3 lg:text-[10px] xl:min-w-[800px] xl:text-xs 2xl:min-w-[880px] 2xl:px-20'>
        {props.dados.conhecimentos.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.1, delay: index * 0.02 }}
              key={index}
            >
              <ConhecimentosItems {...item} />
            </motion.div>
          );
        })}
        <div className='flex h-full w-full flex-col items-center font-medium '>
          <span className='mx-auto mt-auto max-w-20 text-center'>Entre Outros</span>
          <span>...</span>
        </div>
      </div>
    </motion.div>
  );
}
