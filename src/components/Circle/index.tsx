import React from 'react';
import { Container, Icon, Text } from './styles';

interface Props {
  icon: JSX.Element;
  text: string;
}

const Circle = ({ icon, text }: Props) => {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
    </Container>
  );
};

export default Circle;
