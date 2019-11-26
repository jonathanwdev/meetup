import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';
import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetups from '~/components/Meetups';

import { Container, List } from './styles';

function Subscriptions({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  async function loadSubscriptions() {
    try {
      const response = await api.get('subscriptions');
      setSubscriptions(response.data);
    } catch (err) {
      Alert.alert('Erro', 'Parece que algo deu errado.');
    }
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  async function handleUnSubscription(id) {
    try {
      await api.delete(`meetups/${id}/subscriptions`);

      Alert.alert(
        'Sucesso',
        'A partir de agora, você não irá mais participar deste meetup'
      );
      const response = await api.get('subscriptions');
      setSubscriptions(response.data);
    } catch (err) {
      Alert.alert('Erro', 'Parece que algo deu errado');
    }
  }

  async function handleRefresh() {
    setRefreshing(true);
    // const response = await api.get('subscriptions');
    loadSubscriptions();
    // setSubscriptions(response.data);
    setRefreshing(false);
  }

  return (
    <Background>
      <Header />
      <Container>
        <List
          refreshing={refreshing}
          onRefresh={handleRefresh}
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetups
              handleClick={() => handleUnSubscription(item.id)}
              type="subs"
              data={item.Meetup}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="assignment" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
