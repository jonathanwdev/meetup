import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 50px;
  background: #f94d6a;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  display: ${props => (props.invisible ? 'none' : 'flex')};
`;
export const Text = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  font-size: 16px;
`;
