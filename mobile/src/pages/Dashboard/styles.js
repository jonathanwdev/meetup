import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Button from '~/components/Button';

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

export const Meetup = styled.View`
  width: 335px;
  height: 345px;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 15px;
`;
export const Banner = styled.Image`
  width: 335px;
  height: 150px;
  align-self: center;
`;

export const Description = styled.View`
  width: 295px;
  height: 110px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;
export const About = styled.Text`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
  padding: 2px 0;
`;

export const SubscriptionButton = styled(Button)`
  width: 295px;
  height: 50px;
  margin-bottom: 10px;
`;
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 10 },
})``;
