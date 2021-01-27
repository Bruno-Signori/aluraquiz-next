import React from 'react';
const FooterAlura: React.FC = () => {
  return(
    <>
    <div className=" flex text-blue-light bg-gray-lightest bg-opacity-90 justify-items-center p-7 rounded-md">
    <a href="https://www.alura.com.br/">
        <img className="w-17 p-2" src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p className="text-sm p-2">
        Orgulhosamente criado durante 
        <br/>
        a 
        <a href="https://www.alura.com.br/">
          <span className="tracking-widest text-blue-light hover:text-gray-dark">  Imersão React da Alura</span>

        </a>
      </p>
      
     </div> 
    </>
  )}

  export default FooterAlura;
