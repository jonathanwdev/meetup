import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/hlogo.svg';
import { Container, Navigation } from './styles';

export default function Header() {
  return (
    <Container>
      <Navigation>
        <Link to="/">
          <img src={logo} alt="Meetup" />
        </Link>
        <aside>
          <div>
            <strong>Midorya Izuku</strong>
            <Link to="profile">Meu perfil</Link>
          </div>
          <button type="button">Sair</button>
        </aside>
      </Navigation>
    </Container>
  );
}
