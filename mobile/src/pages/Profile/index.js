import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';
import Bachground from '~/components/Background';

// import { Container } from './styles';

export default function Profile() {
  return (
    <Bachground>
      <Text>Profile</Text>
    </Bachground>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
