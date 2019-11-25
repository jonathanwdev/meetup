import React from 'react';
import { StatusBar } from 'react-native';
import SignedLogo from '~/assets/Main.png';

import { Container, Image } from './styles';

export default function Header() {
  return (
    <Container>
      <StatusBar hidden />
      <Image source={SignedLogo} />
    </Container>
  );
}
