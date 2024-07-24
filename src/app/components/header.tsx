// components/Header.tsx
import React from 'react';
import WaveSVG from './onda';

const Header: React.FC = () => {
  return (
    <>
      <header className="flex justify-between items-center relative backdrop-blur-md z-50 sticky top-0">
        <div className='flex'>
            <a href="/"className="text-5xl p-8 font-pandora ml-[40px] [text-shadow:_0_4px_0_rgb(0_0_0_/_40%)] ">Início</a>
        </div>
        <nav>
              <ul className="text-4xl mr-24 flex space-x-6 [text-shadow:_0_4px_0_rgb(0_0_0_/_40%)]">
                <li><a href='#sobre' className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[1px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0 ">Sobre</a></li>
                <li><a href="#projetos" className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[1px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0">Projetos</a></li>
                <li><a href="#formacao" className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[1px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0">Formação</a></li>
                <li><a href="#qualidades" className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[1px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0">Qualidades</a></li>
                <li><a href="#contatos" className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[1px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0">Contato</a></li>
              </ul>
            </nav>
        </header>
    </>
  );
};

export default Header;