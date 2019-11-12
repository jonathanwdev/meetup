import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, MeetList } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Content>
        <header>
          <p>Meus Meetups</p>
          <button type="button">Novo Meetup</button>
        </header>
        <ul>
          <MeetList>
            <Link to="/dashboard">
              <strong>MeetUp React Native</strong>
              <p>24 de Junho as 20h</p>
            </Link>
          </MeetList>

          <MeetList>
            <Link to="/dashboard">
              <strong>MeetUp React Native</strong>
              <p>24 de Junho as 20h</p>
            </Link>
          </MeetList>
          <MeetList>
            <Link to="/dashboard">
              <strong>MeetUp React Native</strong>
              <p>24 de Junho as 20h</p>
            </Link>
          </MeetList>
          <MeetList>
            <Link to="/dashboard">
              <strong>MeetUp React Native</strong>
              <p>24 de Junho as 20h</p>
            </Link>
          </MeetList>
          <MeetList>
            <Link to="/dashboard">
              <strong>MeetUp React Native</strong>
              <p>24 de Junho as 20h</p>
            </Link>
          </MeetList>
        </ul>
      </Content>
    </Container>
  );
}
