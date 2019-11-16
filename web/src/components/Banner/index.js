import React from 'react';

import { Container } from './styles';

export default function Banner() {
  return (
    <Container>
      <label htmlFor="banner">
        <img src="" alt="" />

        <input type="file" id="banner" accept="image/*" />
      </label>
    </Container>
  );
}
