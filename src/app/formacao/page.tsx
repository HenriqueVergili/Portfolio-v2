'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/header';

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  return (
    <div className='bg-gradient-formacao container'>
      <Header/>
      <div className='text-center'>
        <div>
          <p className='text-7xl font-bold  animate-slidein opacity-0 [--slidein-delay:300ms]'> Principais formações</p>
        </div>
        <div className='mt-24 ml-[320px] list-disc '>
          <li className='text-4xl text-left mt-4 animate-slidein opacity-0 [--slidein-delay:500ms]'>Pontifícia Universidade Católica de Campinas</li>
          <p className='text-2xl mt-4 text-left ml-20 animate-slidein opacity-0 [--slidein-delay:500ms]'>Bacharelado em Engenharia de Software, 2021-2024</p>
          <li className='text-4xl text-left mt-4 animate-slidein opacity-0 [--slidein-delay:800ms]'>Ensino de Inglês CNA</li>
          <p className='text-2xl mt-4 text-left ml-20 animate-slidein opacity-0 [--slidein-delay:800ms]'>Curso finalizado em 2017, realizado até o último módulo</p>
        </div>
        <div>
          <p className='text-7xl font-bold mt-16 animate-slidein opacity-0 [--slidein-delay:1000ms]'>Licenças e Certificados</p>
        </div>
        <div className='mt-20 ml-[320px] list-disc'>
          <li className='text-4xl text-left mt-4 animate-slidein opacity-0 [--slidein-delay:1500ms]'>Certificado de Inglês Cambridge</li>
          <p className='text-2xl mt-4 text-left ml-20 animate-slidein opacity-0 [--slidein-delay:1500ms]'>Nível C1, conquistado em 2018</p>
          <li className='text-4xl text-left mt-4 animate-slidein opacity-0 [--slidein-delay:1500ms]'>Certificado de React</li>
          <a href="/ReactCertificate1.pdf" target="_blank" rel="noopener noreferrer" className='text-2xl mt-4 text-left ml-20 animate-slidein opacity-0 [--slidein-delay:1500ms]'>React: desenvolvendo com JavaScript</a>
          <a href="/ReactCertificate2.pdf" target="_blank" rel="noopener noreferrer" className='text-2xl mt-4 text-left ml-20 animate-slidein opacity-0 [--slidein-delay:1500ms]'>React: como os componentes funcionam</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
