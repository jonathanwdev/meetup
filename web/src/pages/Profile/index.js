import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  email: Yup.string()
    .email()
    .required('O email é obrigatorio'),
  oldPassword: Yup.string().required('A senha é obrigatoria'),

  password: Yup.string()
    .min(6)
    .when('oldPassword', (oldPassword, field) =>
      oldPassword ? field.required().min(6) : field
    ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field.required('Confirme sua senha').oneOf([Yup.ref('password')])
      : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit} initialData={profile}>
        <Input type="text" name="name" placeholder="Nome Completo" />
        <Input type="email" name="email" placeholder="Email" />
        <hr />
        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme a nova senha"
        />
        <button type="submit">
          {loading ? 'Atualizando...' : 'Salvar perfil'}
        </button>
      </Form>
    </Container>
  );
}
