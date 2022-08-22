import React from 'react';

import Texto from '../header/texto';

import './footer.css'

const Footer = () => {
  return ( 
    <div className='footer-container'>
      <div className="bg-color">
        <div className="bg-cut"></div>
      </div>
      <br /><br />
      <div className='texto'>
      <Texto texto='Testando suas habilidades em HTML, CSS e JS.'/>
      <Texto texto='Linx Impulse'/>
      <Texto texto='2019'/>
      </div>
      <div className='bg-down' />
    </div>
   );
}
 
export default Footer;