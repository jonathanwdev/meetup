import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '~/assets/mLogo.svg';

export default function SignUp() {
  return (
    <>
      <img src={Logo} alt="meetup" />

      <form>
        <input type="text" placeholder="Digite seu nome completo" />
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Entrar</button>
        <Link to="/">Já tenho Login</Link>
      </form>
    </>
  );
}
