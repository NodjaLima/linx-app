import React from 'react';

import Texto from '../header/texto';

import './footer.css'

const Footer = () => {
  return ( 
    <footer className='footer-container'>
      <Texto texto='Testando suas habilidades em HTML, CSS e JS.'/>
      <Texto texto='Linx Impulse'/>
      <Texto texto='2019'/>
    </footer>
   );
}
 
export default Footer;