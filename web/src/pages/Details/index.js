import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { Container, Content, Meetup } from './styles';

export default function Details({ match }) {
  const [meetups, setMeetups] = useState([]);
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

  return (
    <Container>
      <Content>
        <header>
          <p>{meetups.title}</p>
          <aside>
            <button type="button">Editar</button>
            <button type="button">Cancelar</button>
          </aside>
        </header>
        <Meetup>
          <div>
            <img src={meetups.url} alt="" />
          </div>
          <article>{meetups.description}</article>
          <footer>
            <p>{meetups.formatedDate}</p>
            <p>{meetups.location}</p>
          </footer>
        </Meetup>
      </Content>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.objectOf().isRequired,
};
