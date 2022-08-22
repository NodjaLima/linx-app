import React from 'react';

import Botao from '../header/botao';

import './formulario.css'

const Validacao = ({valoresIniciais}) => {
  console.log(valoresIniciais)

  function handleChange () {
    console.log( 'alguem digitou aqui nesse form')
  }
  return {
    values: valoresIniciais,
    handleChange
  }
}

const Forms = () => {
  const valida = Validacao({
    valoresIniciais: {
      inputNome: 'seu nome aqui',
      inputEmail:  'seu_email@email.com',
      inputCPF: '00000000000'
    }
  }) 

  return ( 
    <form className='formulario-um'>

      <div className='inputForm'>

      <label htmlFor="inputNome">Seu nome:</label>
      <input className='inputTxt' type="text" id='inputNome' value={valida.values.inputNome} onChange={()=> {Validacao.handleChange}}/>
      <label htmlFor="inputEmail">E-mail:</label>
      <input className='inputTxt' type="text" id='inputEmail' value={valida.values.inputEmail} onChange={()=> {Validacao.handleChange}}/>
      <label htmlFor="inputCPF">CPF</label>
      <input className='inputTxt' type="number" id='inputCPF' value={valida.values.inputCPF} onChange={()=> {Validacao.handleChange}}/>
     
      <div>

        <input type='radio' id='masc'/><label htmlFor='masc'>Masculino</label>
        <input type="radio" id='feme'/><label htmlFor='feme'>Feminino</label>
      
      </div>
      
      </div>
      
      <Botao className='botaoForms' textoBotao="Enviar" type='submit'/>
    </form>



    // <form className='formulario-um'>
    //   <InputText labelFor='inputNome' labelTxt='Seu nome' inputType="text" value={Formik.values.inputNome} />
    //   <InputText labelFor='inputEmail' labelTxt='E-mail' inputType="text" value={Formik.values.inputEmail}/>
    //   <InputText labelFor='inputCPF' labelTxt='CPF' inputType="number" />
    //   <div className='radios' value={Formik.values.inputCPF}>
    //     <InputRadio  labelFor='inputMasc' labelTxt='Masculino' inputType="radio" /> 
    //     <InputRadio  labelFor='inputFem' labelTxt='Feminino' inputType="radio" /> 
    //   </div>
    //   <Botao className='botaoForms' textoBotao="Enviar" type='submit'/>

    //</form>
   );
}
 
export default Forms;