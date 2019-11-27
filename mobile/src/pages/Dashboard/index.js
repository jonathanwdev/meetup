import React, { useState, useMemo, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';
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
  List,
  Loading,
} from './styles';

function Dashboard({ isFocused }) {
  const [date, setDate] = useState(new Date());
  const [refreshing, setRefreshing] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [meetups, setMeetups] = useState([]);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM", { locale: pt }),
    [date]
  );

  /** Changind date  */
  function handlePrevDay() {
    if (date < new Date()) return;
    setDate(subDays(date, 1));
    setPage(1);
  }

  function handleNextDat() {
    setDate(addDays(date, 1));
    setPage(1);
  }
  /** Changind date  */

  /** Loading meetups */

  async function handleLoadMore() {
    const newPage = page + 1;
    if (meetups.length >= 10) {
      setLoading(true);
      setDate(date);
      setPage(newPage);
      if (total < 1) {
        setLoading(false);
        return;
      }
      const response = await api.get('meetups', {
        params: {
          date,
          page,
        },
      });
      const totalItems = response.data.length;
      setTotal(totalItems);
      setMeetups(page > 1 ? [...meetups, ...response.data] : response.data);
      setLoading(false);
    }
  }
  async function loadMeetups(nextPage = page) {
    setLoading(true);
    setDate(date);

    const response = await api.get('meetups', {
      params: {
        date,
        page: nextPage,
      },
    });
    setTotal(response.data.length);
    setRefreshing(false);
    setMeetups(response.data);
    setLoading(false);
  }

  useEffect(() => {
    if (isFocused) {
      loadMeetups();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

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

  /** Subscribing */

  async function handleSubscription(id) {
    try {
      await api.post(`meetups/${id}/subscriptions`);

      Alert.alert('Sucesso', 'Inscreição realizada com sucesso!');
    } catch (err) {
      Alert.alert('Erro', 'Parece que algo deu errado :( ');
    }
  }

  async function loadSubscriptions() {
    try {
      const response = await api.get('subscriptions');
      setSubscriptions(response.data);
    } catch (err) {
      Alert.alert('erro', 'Erro ao carregar inscrições');
    }
  }
  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  /** Subscribing */

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

        <List
          refreshing={refreshing}
          onRefresh={handleRefresh}
          onEndReachedThreshold={0.2}
          onEndReached={handleLoadMore}
          ListFooterComponent={loading && <Loading />}
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetups
              subscribed={
                subscriptions
                  ? subscriptions.filter(subs => subs.meetup_id === item.id)
                      .length > 0
                  : ''
              }
              handleClick={() => handleSubscription(item.id)}
              data={item}
              type="meetup"
            />
          )}
        />
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

export default withNavigationFocus(Dashboard);
