import React, { useState, useMemo, useEffect } from 'react';

import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import Header from '~/components/Header';
import Meetups from '~/components/Meetups';
import Background from '~/components/Background';

import {
  Container,
  DatePicker,
  DateText,
  DateButton,
  Text,
  List,
  Loading,
} from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [meetups, setMeetups] = useState([]);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM", { locale: pt }),
    [date]
  );

  /** Loading meetups */

  useEffect(() => {
    async function loadMeetups() {
      setLoading(true);

      const response = await api.get('meetups', {
        params: {
          date,
          page,
        },
      });
      setMeetups(response.data);
      setPage(1);
      setLoading(false);
    }
    loadMeetups();
  }, [date, page]);

  /** Loading meetups */

  /** Refreshing page  */
  async function handleRefresh() {
    setRefreshing(true);
    const response = await api.get('meetups', {
      params: {
        date,
        page: 1,
      },
    });
    setMeetups(response.data);

    setRefreshing(false);
  }
  /** Refreshing page  */

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

  async function handleLoadMore() {
    setLoading(true);
    const newPage = page + 1;
    const response = await api.get('meetups', {
      params: {
        date,
        page: newPage,
      },
    });
    setMeetups([...meetups, ...response.data]);
    setPage(newPage);
    setLoading(false);
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
            onEndReachedThreshold={0.1}
            onEndReached={handleLoadMore}
            ListFooterComponent={loading && <Loading />}
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
