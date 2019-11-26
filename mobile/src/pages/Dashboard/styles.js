import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const DatePicker = styled.View`
  height: 80px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DateText = styled.Text`
  flex-direction: row;
  display: flex;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const DateButton = styled(RectButton)`
  background: transparent;
  margin: 0 15px;
  padding: 15px 15px;
`;
export const Text = styled.Text`
  color: #fff;
`;
export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#fff',
})`
  margin: 30px 0;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 10 },
})``;
