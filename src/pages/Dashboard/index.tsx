import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container, Title, LogoImage,
} from './styles';

import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import Planets from '../Planets';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoImage source={logoImg} />
      <Title>Bem vindo</Title>

      {/* <LinkContainer onPress={() => { }}>
        <Icon name="planet" size={20} color="#fff" />
        <LinkText>Planetas</LinkText>
      </LinkContainer> */}
      <Button
        icon="globe"
        onPress={() => {
          navigation.navigate('Planets');
        }}
      >
        Planetas

      </Button>
      <Button
        icon="users"
        onPress={() => { navigation.navigate('Characters'); }}
      >
        Personagens
      </Button>
    </Container>
  );
};

export default Dashboard;
