import React from 'react';

import { Container, Label } from './styles';

function Card() {
  return (
  <Container>
    <header>
      <Label cor="#715nc1"/>
    </header>
    <p>Fazer migração completa de servidor</p>
    <img src='http://api.adorable.io/avatars/285/abott@adorable.png' />
  </Container>
    );
}

export default Card;