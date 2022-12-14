import React from 'react';
import { useDrag } from 'react-dnd'
import { Container, Label } from './styles';

function Card({data}) {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }); 

  return (
  <Container ref={dragRef} isDragging={isDragging}>
    <header>
      {data.labels.map( label => <Label key={label} cor={label}/>) }    
    </header>
    <p>{ data.content }</p>
    { data.user && <img src={data.user} alt='' />}
  </Container>
    );
}

export default Card;