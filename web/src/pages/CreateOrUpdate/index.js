import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import {
  updateMeetupRequest,
  createMeetupRequest,
} from '~/store/modules/meetup/actions';
import Datepicker from './Datepicker';
import Banner from './Banner';

import { Container } from './styles';

export default function CreateOrUpdate({ match }) {
  const dispatch = useDispatch();
  const [, option] = useLocation().pathname.split('/');
  const meetups = useSelector(state =>
    state.meetup.meetups.find(m => m.id === Number(match.params.id) || '')
  );

  function handleSubmit(data) {
    if (option === 'create') {
      dispatch(createMeetupRequest());
    } else {
      dispatch(updateMeetupRequest(match.params.id, data));
    }
  }

  return (
    <Container>
      <Form initialData={meetups} onSubmit={handleSubmit}>
        <Banner name="banner" />
        <Input type="text" name="title" placeholder="Titulo do Meetup" />
        <Input
          multiline
          type="text"
          name="description"
          placeholder="Descrição completa"
        />

        <Datepicker name="date" />
        <Input type="text" name="location" placeholder="Localização" />
        <button type="submit">
          <MdAddCircleOutline size={18} color="#fff" /> Salvar Meetup
        </button>
      </Form>
    </Container>
  );
}

CreateOrUpdate.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
