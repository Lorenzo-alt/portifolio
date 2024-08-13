'use client';
import { SessaoContato } from '@/app/types';
import Wave from '@/public/contato/wave-contact.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FiPhone } from 'react-icons/fi';
import { z } from 'zod';

import Spinner from '../Spinner';
import Title from '../Title';
import FormInput from './Input';

const formSchema = z.object({
  nome: z.string({ required_error: '* Digite um nome valido.' }).min(2, { message: '* Digite um nome valido.' }),
  email: z.string({ required_error: '* Digite um email valido.' }).email({ message: '* Digite um email valido.' }),
  telefone: z
    .string({ required_error: '* Digite um telefone valido.' })
    .min(11, { message: '* Digite um telefone valido.' }),
  mensagem: z
    .string({ required_error: '* Digite uma mensagem válida.' })
    .min(1, { message: '* Digite uma mensagem válida.' }),
});

type typeForm = z.infer<typeof formSchema>;

type typeProps = {
  dados: SessaoContato;
};

export default function Contato(props: typeProps) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<typeForm>({
    resolver: zodResolver(formSchema),
  });
  const [values, setValues] = useState('');
  const submit = (data: typeForm) => {
    setValues(JSON.stringify(data, null, 2));
  };

  useEffect(() => {
    if (values) enviarEmail(values);
  }, [values]);

  const [loading, setLoading] = useState<boolean>();

  const enviarEmail = async (values: string) => {
    setLoading(true);
    toast.loading('Enviando...');
    try {
      const response = await fetch('/api/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: values,
      });

      if (response.ok) {
        setLoading(false);
        toast.dismiss();
        toast.success('Email enviado com sucesso!');
        reset();
      } else {
        setLoading(false);
        toast.dismiss();
        toast.error('Ocorreu um erro no servidor, entre em contato pelo telefone!');
      }
    } catch (error) {
      setLoading(false);
      toast.dismiss();
      toast.error('Ocorreu um erro no servidor, entre em contato pelo telefone!');
    }
  };

  const contatos = [
    {
      icon: <FiPhone size={18} className='text-azul-padrao transition' />,
      dado: props.dados.dados.telefone,
    },
    { icon: <FiPhone size={18} className='text-azul-padrao transition' />, dado: props.dados.dados.email },
  ];
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
      <Title titulo='contato' />
      <div className='relative grid w-full grid-cols-2 rounded-[10px] bg-gradient-to-b from-grad-0 to-grad-1 p-2.5 transition sm:min-w-[600px] sm:max-w-min lg:min-w-[650px] xl:min-w-[800px] 2xl:min-w-[880px]'>
        <div
          className='mr-4 hidden h-full flex-col rounded-[10px] bg-fundo-contato transition lg:flex'
          style={{
            background: 'linear-gradient(180deg, rgba(176,176,176,0.3) 0%, rgba(56, 56, 56, 0.3) 100%)',
          }}
        >
          <div className='flex flex-col p-5 transition'>
            <span className='text-[18px] font-bold transition'>Tem algum projeto?</span>
            <span className='text-[14px] transition'>Entre em contato!</span>
          </div>
          <div className='mt-auto flex flex-col gap-5 p-5 pb-5 transition'>
            {contatos.map((item, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  key={index}
                  className='flex items-center gap-2 rounded-[10px] bg-branco-terciario px-5 py-2.5 transition'
                >
                  <div className='flex items-center rounded-full bg-branco-quaternario p-2 transition'>{item.icon}</div>
                  <div className='flex flex-col text-black transition'>
                    <h3 className='text-[14px] font-extrabold transition'>Contato</h3>
                    <h4 className='text-[12px] transition'>{item.dado}</h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <Wave className='w-full self-end rounded-b-[10px] drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] transition' />
        </div>
        <form onSubmit={handleSubmit(submit)} className='col-span-2 transition lg:col-auto lg:ml-4'>
          <div className='flex flex-col transition'>
            <FormInput
              label='Nome'
              id='nome'
              disabled={loading === true}
              type='text'
              register={register}
              error={errors.nome}
            />
            <FormInput
              label='Email'
              id='email'
              disabled={loading === true}
              type='text'
              register={register}
              error={errors.email}
            />
            <FormInput
              label='Celular'
              id='telefone'
              type='text'
              register={register}
              error={errors.telefone}
              disabled={loading === true}
              mask='(00) 00000-0000'
              lazy={false}
              onAccept={(unmaskedValue) => {
                setValue('telefone', unmaskedValue);
              }}
            />
            <FormInput
              label='Mensagem'
              id='mensagem'
              type='textarea'
              register={register}
              error={errors.mensagem}
              disabled={loading === true}
              rows={6}
            />
          </div>
          <div className='relative flex items-end transition lg:hidden '>
            <Wave className='mt-2 w-full self-end rounded-b-[10px] drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] transition' />
            <div className='absolute mb-[4%] flex w-full items-center justify-center transition'>
              <button
                type='submit'
                className='z-10 my-auto flex h-10 w-[90%] items-center justify-center rounded-[10px] bg-fundo-painel p-2 text-center text-[12px] font-bold text-white transition'
              >
                {loading ? <Spinner color='#ffffff' /> : 'Enviar'}
              </button>
            </div>
          </div>
          <button
            type='submit'
            className='mt-5 hidden h-10 w-full items-center justify-center rounded-[10px] bg-branco-terciario p-2 text-center text-[12px] font-bold text-black transition lg:flex'
          >
            {loading ? <Spinner color='#2b2b2b' /> : 'Enviar'}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
