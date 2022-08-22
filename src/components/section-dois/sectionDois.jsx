import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Botao from '../header/botao';
import Card from './card'
import Divisor from '../divisor/divisor';

import './section-dois.css'

const SectionDois = () => {

  const [req, setReq] = useState([])
  const [page, setPage] = useState([])

     
  useEffect(()=>{
    const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`
    axios
    .get(url)
    .then((response) => {
      setPage(response.data.nextPage)
      setReq(response.data.products)
    })
    .catch((e)=>(e.message))
  }, [])

  
  function adicionaProdutos(url) {
    axios.get(`http://${url}`)
    .then((response) => {
      setPage(response.data.nextPage)
      setReq(
        [...req, ...response.data.products]
        )
    })
    .catch((e)=>('deu ruim'))
  } 


  return ( 
    <div className='section-dois'>
      <Divisor texto='Sua seleção especial' width='30%'/>
      <div className='grid-cards'>
        { req.map((produto)=>{
          return <Card src={produto.image} id={produto.id} nome={produto.name} descricao={produto.description} oldPrice={`De R$ ${produto.oldPrice}`} promo={`Por: R$ ${produto.price}`} parcelas={`ou ${produto.installments.count}x de ${produto.installments.value}`} />
        })}
      </div>
      <div className='div-botao'>
      <Botao onClick={()=> {adicionaProdutos(page)}} textoBotao='Ainda mais produtos aqui!'/>
      </div>

    </div>
   );
}
 
export default SectionDois;