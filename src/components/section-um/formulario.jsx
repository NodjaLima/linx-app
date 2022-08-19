import React from 'react';

import InputText from './input';
import InputRadio from './inputRadio';
import Botao from '../header/botao';

import './formulario.css'

const Forms = () => {
  return ( 
    <form className='formulario-um'>
      <InputText labelFor='inputNome' labelTxt='Seu nome' inputType="text" />
      <InputText labelFor='inputEmail' labelTxt='E-mail' inputType="text" />
      <InputText labelFor='inputCPF' labelTxt='CPF' inputType="text" />
      <div className='radios'>
        <InputRadio  labelFor='inputMasc' labelTxt='Masculino' inputType="radio" /> 
        <InputRadio  labelFor='inputFem' labelTxt='Feminino' inputType="radio" /> 
      </div>
      <Botao className='botaoForms' textoBotao="Enviar" />

    </form>
   );
}
 
export default Forms;