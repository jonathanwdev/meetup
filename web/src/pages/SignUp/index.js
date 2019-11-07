import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Logo from '~/assets/mLogo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatorio'),
    email: Yup.string()
      .email('Insira um email valido')
      .required('O email é obrigatorio'),
    password: Yup.string()
      .min(6, 'No minimo 6 caracteres')
      .required('A senha é obrigatoria'),
  });

  return (
    <>
      <img src={Logo} alt="meetup" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Digite seu nome completo" />
        <Input name="email" type="email" placeholder="Digite seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Entrar</button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  );
}
