import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, subDays, addDays, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import Header from '~/components/Header';
import Meetups from '~/components/Meetups';
import Background from '~/components/Background';

import { listMeetupRequest } from '~/store/modules/meetup/actions';

import {
  Container,
  DatePicker,
  DateText,
  DateButton,
  Text,
  List,
} from './styles';

export default function Dashboard() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [date, setDate] = useState(new Date());
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);
  const loading = useSelector(state => state.meetup.loading);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM", { locale: pt }),
    [date]
  );

  /** Inifnity scroll  */

  async function handleLoadMore() {
    if (meetups.lenght < 10) return;
    setPage(page + 1);
  }

  /** Inifnity scroll  */

  /** Load Subscriptions */
  useEffect(() => {
    async function loadSubscriptions() {
      try {
        const response = await api.get('subscriptions');
        setSubscriptions(response.data);
      } catch (err) {
        Alert.alert('Erro', 'Parece que algo deu errado.');
      }
    }
    loadSubscriptions();
  }, []);

  /** Load Subscriptions */

  /** Refreshing page  */
  async function handleRefresh() {
    setRefreshing(true);
    setPage(1);
    dispatch(listMeetupRequest(date, page));
    setPage(1);
    setRefreshing(false);
  }
  /** Refreshing page  */

  /** Getting meetups from redux */

  useEffect(() => {
    dispatch(listMeetupRequest(date, page));
  }, [date, dispatch, page]);

  /** Getting meetups from redux */

  /** Changind date  */
  function handlePrevDay() {
    if (date < new Date()) return;
    setDate(subDays(date, 1));
  }

  function handleNextDat() {
    setDate(addDays(date, 1));
  }
  /** Changind date  */

  async function handleSubscription(id) {
    try {
      await api.post(`meetups/${id}/subscriptions`);
      Alert.alert('Sucesso', 'Inscreição realizada com sucesso!');
    } catch (err) {
      Alert.alert('Erro', 'Parece que algo deu errado :( ');
    }
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
            // onEndReached={handleLoadMore}
            // onEndReachedThreshold={0.1}
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetups
                handleClick={() => handleSubscription(item.id)}
                data={item}
                type="meetup"
              />
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
