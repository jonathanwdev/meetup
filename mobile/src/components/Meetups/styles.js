import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View``;

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
  opacity: ${props => (props.past ? 0.6 : 1)};
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
