import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt';
import { deleteRequest } from '~/store/modules/meetup/actions';

import { Container, Content, Meetup } from './styles';

export default function Details({ match }) {
  const dispatch = useDispatch();
  const meetups = useSelector(state =>
    state.meetup.meetups.find(m => m.id === Number(match.params.id))
  );

  function handleRemove() {
    dispatch(deleteRequest(meetups.id));
  }
  return (
    <Container>
      <Content>
        <header>
          <p>{meetups.title}</p>
          <aside>
            <Link to={`/update-meetup/${meetups.id}`}>Editar</Link>
            <button type="button" onClick={handleRemove}>
              Cancelar
            </button>
          </aside>
        </header>
        <Meetup>
          <div>
            <img
              src={meetups.picture && meetups.picture.url}
              alt={meetups.title}
            />
          </div>
          <article>{meetups.description}</article>
          <footer>
            <p>
              {format(parseISO(meetups.date), `dd 'de' MMMM 'às' HH'h'`, {
                locale: pt,
              })}
            </p>
            <p>{meetups.location}</p>
          </footer>
        </Meetup>
      </Content>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
