import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/hlogo.svg';
import { Container, Navigation } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Navigation>
        <Link to="/">
          <img src={logo} alt="Meetup" />
        </Link>
        <aside>
          <div>
            <strong>{profile.name}</strong>
            <Link to="profile">Meu perfil</Link>
          </div>
          <button type="button" onClick={handleSignOut}>
            Sair
          </button>
        </aside>
      </Navigation>
    </Container>
  );
}
