import React from 'react';

const Texto = (props) => {
  return ( 
    <p className={props.classe}>{props.texto}</p>
   );
}
 
export default Texto;