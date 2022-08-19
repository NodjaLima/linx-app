import React from 'react';

import Texto from './texto';
import Botao from './botao';

import './header.css'

const Header = () => {
  return ( 
    <div className='header-container'>
      <Texto classe="texto-um" texto='uma seleção de produtos' />
      <Texto classe="texto-dois" texto='especial para você' />
      <Texto classe="texto-tres" texto='todos os produtos dessa lista foram selecionados a partir da sua navegação. Aproveite!' />

      <div className='header-botoes'>
        <Botao textoBotao="Conheça a Linx" />
        <Botao textoBotao="Ajude o algoritmo" />
        <Botao textoBotao="Seus produtos" />
        <Botao textoBotao="Compartilhe" />
      </div>

    </div>
   );
}
 
export default Header;