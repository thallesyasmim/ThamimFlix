import React from 'react';
import { FooterBase, Ancora, Img } from './styles';
import Logo from '../../assets/img/thamimflix.png';

function Footer() {
  return (
    <FooterBase>
      <Ancora href="https://www.alura.com.br/">
        <Img src={Logo} alt="Thamimflix" />
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </Ancora>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
