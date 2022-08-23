import React from 'react';

import Texto from '../header/texto'
import InputText from '../section-um/input'
import Botao from '../header/botao';
import Divisor from '../divisor/divisor';

import './SectionTres.css'

const SectionTres = () => {
  return ( 
    <div className='section-tres'>
      <div className='divisor'>
        <Divisor texto='Compartilhe a novidade' width="30%"/>
      </div>
      <Texto classe='texto-section-tres' texto='Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!'/>
      <div className='inputs-section-tres'>
        <InputText labelFor='nome-do-amigo' labelTxt='Nome do seu amigo:' inputType="text"/>
        <InputText labelFor='email-do-amigo' labelTxt='E-mail:' inputType="text"/>
      </div>
      <div className='botao-section-tres'>
        <Botao textoBotao="Enviar agora" />
      </div>
    </div>
   );
}
 
export default SectionTres;