import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '~/assets/mLogo.svg';

export default function SignIn() {
  return (
    <>
      <img src={Logo} alt="meetup" />

      <form>
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Entrar</button>
        <Link to="/register">Criar conta gratis</Link>
      </form>
    </>
  );
}
