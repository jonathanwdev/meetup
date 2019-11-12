import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { Container, Content, MeetList } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('list');
      const data = response.data.map(meetup => ({
        ...meetup,
        formatDate: format(parseISO(meetup.date), `dd 'de' MMMM 'às' HH'h'`, {
          locale: pt,
        }),
      }));

      setMeetups(data);
    }
    loadMeetups();
  }, []);

  return (
    <Container>
      <Content>
        <header>
          <p>Meus Meetups</p>
          <button type="button">Novo Meetup</button>
        </header>
        <ul>
          {meetups.map(meetup => (
            <MeetList key={meetup.id}>
              <Link to="/dashboard">
                <strong>{meetup.title}</strong>
                <p>{meetup.formatDate}</p>
              </Link>
            </MeetList>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
