import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import DateTimePicker from 'react-datetime-picker';

import { Form, Input, Textarea } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container } from './styles';

export default function MeetUpdate({ match }) {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get(`list/${match.params.id}`);
      const data = {
        ...response.data,
        formatedDate: format(
          parseISO(response.data.date),
          `dd 'de' MMMM 'às' HH'h'`,
          {
            locale: pt,
          }
        ),
      };
      setMeetups(data);
    }
    loadMeetups();
  }, [match.params.id]);
  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={meetups} onSubmit={handleSubmit}>
        <label htmlFor="banner">
          <img src="" alt="" />

          <input type="file" id="banner" accept="image/*" />
        </label>
        <Input type="text" name="title" placeholder="Titulo do Meetup" />
        <Textarea
          type="text"
          name="description"
          placeholder="Descrição completa"
        />
        <input type="datetime-local" name="date" value="2019-01-01" />
        <DateTimePicker onChange={() => this.onChange} />
        <Input type="text" name="location" placeholder="Localização" />
        <button type="submit">Salvar Meetup</button>
      </Form>
    </Container>
  );
}

MeetUpdate.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
