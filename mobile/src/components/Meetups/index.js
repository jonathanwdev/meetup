import React from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Meetup,
  Banner,
  Description,
  Title,
  About,
  SubscriptionButton,
} from './styles';

export default function Meetups({ data, onSubscription }) {
  return (
    <>
      <Meetup past={new Date(data.date) < new Date()}>
        <Banner source={{ uri: data.picture.url }} />
        <Description>
          <Title>{data.title}</Title>
          <About>
            {format(parseISO(data.date), "d 'de' MMMM', ás 'H'h'", {
              locale: pt,
            })}
          </About>
          <About>{data.location}</About>
          <About>{`Organizador: ${data.User.name}`}</About>
        </Description>

        <SubscriptionButton
          onPress={onSubscription}
          invisible={new Date(data.date) < new Date()}
        >
          Realizar inscrição
        </SubscriptionButton>
      </Meetup>
    </>
  );
}
