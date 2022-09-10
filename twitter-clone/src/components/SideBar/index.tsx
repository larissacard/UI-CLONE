import React from 'react';

import News from '../News';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
 } from './styles';

const SideBar: React.FC = () => {
  return(
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter"/>
            <SearchIcon />  
        </SearchWrapper>

        <Body>
            <List
                title='Talvez você curta'
                elements={[
                    <FollowSuggestion 
                        name="Luiz Batanero"
                        nickname="@luizbatanero"
                    />,
                    <FollowSuggestion 
                        name="Luke Morales"
                        nickname="@lukemorales"
                    />,
                    <FollowSuggestion 
                    name="Camila Magalhães"
                    nickname="@camilamagalhaes"
                />
                ]}
            />

            <List
                title='Talvez você curta'
                elements={[
                    <News />,
                    <News />,
                    <News />
                ]}
            />
        </Body>
    </Container>
  );
}

export default SideBar;