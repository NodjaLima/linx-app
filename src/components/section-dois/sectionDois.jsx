import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Botao from '../header/botao';
import Card from './card'

const SectionDois = () => {

  const [req, setReq] = useState([])

  const url = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'
  useEffect(()=>{
    axios
    .get(url)
    .then((response) => {
      console.log(response.data.products)
      setReq(response.data.products)})
      .catch((e)=>('deu ruim'))
  }, [])

  // const novaRequisicao = (parametro) => {

  //   const novaReq = (parametro) => {axios
  //   .get(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${parametro}`)
  //   .then((res) => (res.data.products))
  //   .catch((e)=>('deu ruim'))}

  //   console.log(novaReq)
  //   // const [ newGrid ] = [...req, novaReq]
  //   // console.log(newGrid)
  //   // setReq(newGrid)
  // }


  return ( 
    <div className='section-dois'>
      <div className='grid-cards'>
        { req.map((produto)=>{
          return <Card src={produto.image} id={produto.id} nome={produto.name} descricao={produto.description} oldPrice={produto.oldPrice} promo={produto.price} />
        })}

      </div>
      <Botao  textoBotao='Ainda mais produtos aqui!'/>
    </div>
   );
}
 
export default SectionDois;