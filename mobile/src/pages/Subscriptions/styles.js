import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;
export const Text = styled.Text`
  color: #fff;
  margin-top: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 10 },
})`
  margin-top: 20px;
`;
