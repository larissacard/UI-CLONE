import React from 'react';

import Button from '../Button';

import { 
    Container,
    TopSide,
    Logo,
    MenuButtons,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    BotSide,
    Avatar,
    ProfileData,
    ExitIcon,

 } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
        <TopSide>
            <Logo />
            <MenuButtons>
                <HomeIcon />
                <span>Página Inicial</span>
            </MenuButtons>

            <MenuButtons>
                <BellIcon />
                <span>Notificações</span>
            </MenuButtons>

            <MenuButtons>
                <EmailIcon />
                <span>Mensagens</span>
            </MenuButtons>

            <MenuButtons>
                <FavoriteIcon />
                <span>Favoritados</span>
            </MenuButtons>

            <MenuButtons className="active">
                <ProfileIcon />
                <span>Perfil</span>
            </MenuButtons>

            <Button>
                <span>Tweetar</span>
            </Button>
        </TopSide>

        <BotSide>
            <Avatar />
            <ProfileData>
                <strong>Guilherme Rodz</strong>
                <span>@guilherme_rodz</span>
            </ProfileData>

            <ExitIcon />
        </BotSide>
    </Container>
  );
}

export default MenuBar;