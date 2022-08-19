import React from 'react';
import './botao.css'

const Botao = (props) => {
  return ( 
    <button className='botao'>{props.textoBotao}</button>
   );
}
 
export default Botao;