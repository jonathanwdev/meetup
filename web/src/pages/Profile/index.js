import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  email: Yup.string()
    .email('Insira um email valido')
    .required('O email é obrigatorio'),
  oldPassword: Yup.string().min(6, 'No minimo 6 caracteres'),
  password: Yup.string().min(6, 'No minimo 6 caracteres'),
  confirmPassword: Yup.string().min(6, 'No minimo 6 caracteres'),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={profile}>
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
        <button type="submit">Salvar perfil</button>
      </Form>
    </Container>
  );
}
