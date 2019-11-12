import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineLoading } from 'react-icons/ai';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import Logo from '~/assets/mLogo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email valido')
    .required('O email é obrigatorio'),
  password: Yup.string().required('A senha é obrigatoria'),
});
export default function SignIn() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={Logo} alt="meetup" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">
          {loading ? <AiOutlineLoading color="#fff" size={25} /> : 'Entrar'}
        </button>
        <Link to="/register">Criar conta gratis</Link>
      </Form>
    </>
  );
}
