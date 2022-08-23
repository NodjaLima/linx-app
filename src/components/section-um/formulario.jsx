import React from 'react';
import { useState } from 'react';

import Botao from '../header/botao';

import './formulario.css'

const Forms = () => {

  const [form, setForm] = useState({
    inputNome: '',
    inputEmail: '',
    inputCPF: ''
  })
  const [vazio, setVazio] = useState(false)
  const [emailValido, setEmailValido] = useState(false)
  const [cpfValido, setCpfValido] = useState(false)


  const handleChange = (e) => {
    let newProp = form;
    setEmailValido(true)
    newProp[e.target.name] = e.target.value
    setForm({ ...newProp })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    let vazios = Object.values(form).some(obj => obj == '')
    setVazio(vazios)

    let validaEmail = form['inputEmail'].toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
    setEmailValido(validaEmail)

    let validaCpf = form['inputCPF'].length == 11
    setCpfValido(validaCpf)

    if( !vazios && validaEmail && validaCpf) {
      e.currentTarget.submit()
    }
  }

  return ( 

    <div >
      <form className='formulario-um' onSubmit={(e) => {handleSubmit(e)}}>

        <label>Seu nome:</label>
        <input className='inputTxt' type="text" name='inputNome' onBlur={(e) => handleChange(e)}/><br />
        {vazio && form['inputNome'] == '' ? <div><p>O campo Nome precisa ser preenchido</p><br /></div> : ''}
        <label>E-mail:</label>
        <input className='inputTxt' type="text" name='inputEmail' onBlur={(e) => handleChange(e)}/><br />
        {vazio && form['inputEmail'] == '' ? <div><p>O campo E-mail precisa ser preenchido</p><br /></div> : ''}
        { !emailValido && form['inputEmail'] !== '' ? <div><p>O campo E-mail precisa ser preenchido com um email válido</p><br /></div> : ''}
        <label>CPF</label>
        <input className='inputTxt' type="number" name='inputCPF' onBlur={(e) => handleChange(e)}/><br />
        {vazio && form['inputCPF'] == '' ? <div><p>O campo CPF precisa ser preenchido</p><br /></div> : ''}
        { !cpfValido && form['inputCPF'] !== '' ? <div><p>O campo CPF precisa ser preenchido corretamente</p><br /></div> : ''}

        <div> 

          <input type='radio' id='masc'/><label htmlFor='masc'>Masculino</label>
          <input type="radio" id='feme'/><label htmlFor='feme'>Feminino</label>
  
        </div>
        <br />
        <Botao className='botaoForms' textoBotao="Enviar" type='submit'/>

      </form>

    </div>

    
   );
}
 
export default Forms;