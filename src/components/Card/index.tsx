import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, CardText, CardImage } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  source: string;
}

const Card: React.FC<ButtonProps> = ({ children, source, ...rest }) => (
  <Container {...rest}>
    <CardImage source={{ uri: source }} resizeMode="stretch" resizeMethod="resize" />
    <CardText>{children}</CardText>
  </Container>
);

export default Card;
