import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Container, Content, Meetup } from './styles';

export default function Details({ match }) {
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get(`list/${match.params.id}`);
      setMeetups(response.data);
    }
    loadMeetups();
  }, [match.params.id]);

  return (
    <Container>
      <Content>
        {meetups.map(meetup => (
          <>
            <header>
              <p>{meetup.title}</p>
              <aside>
                <button type="button">Editar</button>
                <button type="button">Cancelar</button>
              </aside>
            </header>
            <Meetup>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCbLCtAN0pPHM3cEtNR0tEpFf6r6AIHOUMjOnAVl2srJO-5lQP"
                  alt=""
                />
              </div>
              <article>
                O Meetup de React Native é um evento que reúne a comunidade de
                desenvolvimento mobile utilizando React a fim de compartilhar
                conhecimento. Todos são convidados. Caso queira participar como
                palestrante do meetup envie um e-mail para
                organizacao@meetuprn.com.br.
              </article>
              <footer>
                <p>24 de julho as 18h</p>
                <p>Estados Unidos da America</p>
              </footer>
            </Meetup>
          </>
        ))}
      </Content>
    </Container>
  );
}
