import React from 'react';
import List from '../List';
import { loadLists } from '../Services/api'
import { Container } from './styles';


const lists = loadLists();

function Board() {
  return (
    <Container>
      {lists.map(list => <List key={list.title} data={list} />)}
    </Container>
   );
}

export default Board;