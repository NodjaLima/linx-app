import React from 'react';
import Forms from './formulario';
import Informacoes from './informacoes'

import './sectionUm.css'

const SectionUm = () => {
  return ( 
    <div className='section-um-container'>
      <Informacoes />
      <Forms />
    </div>
   );
}
 
export default SectionUm;