import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineLoading } from 'react-icons/ai';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { listRequest } from '~/store/modules/meetup/actions';

import { Container, Content, MeetList } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);
  const loading = useSelector(state => state.meetup.meetups);

  useEffect(() => {
    dispatch(listRequest());
  }, [dispatch]);
  return (
    <Container>
      <Content>
        <header>
          <p>Meus Meetups</p>
          <button type="button">Novo Meetup</button>
        </header>
        <ul loading={loading ? 1 : 0}>
          {loading ? (
            <AiOutlineLoading color="#eb3443" size={40} />
          ) : (
            meetups.map(meetup => (
              <MeetList key={meetup.id}>
                <Link to={`/details/${meetup.id}`}>
                  <strong>{meetup.title}</strong>
                  <p>
                    {format(parseISO(meetup.date), `dd 'de' MMMM 'às' HH'h'`, {
                      locale: pt,
                    })}
                  </p>
                </Link>
              </MeetList>
            ))
          )}
        </ul>
      </Content>
    </Container>
  );
}
