import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, subDays, addDays, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Header from '~/components/Header';
import Background from '~/components/Background';

import { listMeetupRequest } from '~/store/modules/meetup/actions';

import {
  Container,
  DatePicker,
  DateText,
  DateButton,
  Text,
  List,
  Meetup,
  Banner,
  Description,
  Title,
  About,
  SubscriptionButton,
} from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);
  const loading = useSelector(state => state.meetup.loading);

  const [page, setPage] = useState(1);
  const [date, setDate] = useState(new Date());
  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM", { locale: pt }),
    [date]
  );

  const [refreshing, setRefreshing] = useState(false);
  async function handleRefresh() {
    setRefreshing(true);
    setPage(1);
    dispatch(listMeetupRequest(date, page));
    setPage(1);
    setRefreshing(false);
  }
  useEffect(() => {
    dispatch(listMeetupRequest(date, page));
  }, [date, dispatch, page]);

  function handlePrevDay() {
    if (date < new Date()) return;
    setDate(subDays(date, 1));
  }

  function handleNextDat() {
    setDate(addDays(date, 1));
  }

  return (
    <Background>
      <Header />
      <Container>
        <DatePicker>
          <DateButton disabled={date <= new Date()} onPress={handlePrevDay}>
            <Icon
              name="chevron-left"
              size={20}
              color={date <= new Date() ? 'rgba(255,255,255,0.1)' : '#fff'}
            />
          </DateButton>
          <DateText>{dateFormatted}</DateText>
          <DateButton onPress={handleNextDat}>
            <Icon name="chevron-right" size={20} color="#fff" />
          </DateButton>
        </DatePicker>
        {loading ? (
          <Text>Carregando....</Text>
        ) : (
          <List
            refreshing={refreshing}
            onRefresh={handleRefresh}
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetup data={item} refreshing={refreshing}>
                <Banner source={{ uri: item.picture.url }} />
                <Description>
                  <Title>{item.title}</Title>
                  <About>
                    {format(parseISO(item.date), "d 'de' MMMM', ás 'H'h'", {
                      locale: pt,
                    })}
                  </About>
                  <About>{item.location}</About>
                  <About>{`Organizador: ${item.User.name}`}</About>
                </Description>
                <SubscriptionButton onPress={() => {}}>
                  Realizar inscrição
                </SubscriptionButton>
              </Meetup>
            )}
          />
        )}
      </Container>
    </Background>
  );
}
Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
