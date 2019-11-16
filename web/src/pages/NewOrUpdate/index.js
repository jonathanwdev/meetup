import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import DateTimePicker from 'react-datetime-picker';

import { Form, Input, Textarea } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import Banner from '~/components/Banner';

import { Container } from './styles';

export default function NewOrUpdate({ match }) {
  const [date, setDate] = useState(new Date());
  const meetups = useSelector(state =>
    state.meetup.meetups.find(m => m.id === Number(match.params.id) || {})
  );

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={meetups} onSubmit={handleSubmit}>
        <Banner />
        <Input type="text" name="title" placeholder="Titulo do Meetup" />
        <Input
          multiline
          type="text"
          name="description"
          placeholder="Descrição completa"
        />

        <DateTimePicker />
        <Input type="text" name="location" placeholder="Localização" />
        <button type="submit">Salvar Meetup</button>
      </Form>
    </Container>
  );
}

NewOrUpdate.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
