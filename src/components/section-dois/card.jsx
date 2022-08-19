import React from 'react';
import Botao from '../header/botao';

import './card.css'

const Card = (props) => {
  return ( 
    <div className='card-unitario'>
      <img className='imagem-card' src={props.src} />
      <p className='nome-card'>{props.nome}</p>
      <p className='descricao-card'>{props.descricao}</p>
      <p className='oldPrice-card'>{props.oldPrice}</p>
      <p className='promo-card'>{props.promo}</p>
      <p className='parcelas-card'>{props.parcelas}</p>
      <Botao textoBotao='Comprar' />
    </div>
   );
}
 
export default Card;