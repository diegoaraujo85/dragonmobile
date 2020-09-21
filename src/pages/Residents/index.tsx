import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import Button from '../../components/Button';

import {
  Container, Title, FlatList, ResidentText, ResidentContainer,
} from './styles';

interface RouteParams {
  residents: string[];
  planet: string;
}

interface Resident {
  id: number;
  name: string;
}
const Residents: React.FC = () => {
  const [residents, setResidents] = useState<Resident[]>([]);
  const [planet, setPlanet] = useState('');
  const navigation = useNavigation();

  const route = useRoute();
  const routeParams = route.params as RouteParams;

  useEffect(() => {
    let counter = 0;
    const newResidents = routeParams.residents.map((resident) => {
      counter += 1;
      const res = { id: counter, name: resident };
      return res;
    });

    setPlanet(routeParams.planet);
    setResidents(newResidents);
  }, [routeParams.residents, routeParams.planet]);
  return (
    <Container>
      <Title>{`Moradores de ${planet}`}</Title>
      <Button
        icon="globe"
        onPress={() => {
          navigation.navigate('Planets');
        }}
      >
        Planetas

      </Button>
      <FlatList
        data={residents}
        keyExtractor={(resident) => resident.id}
        renderItem={({ item: resident }) => (
          <ResidentContainer>
            <ResidentText>{resident.name}</ResidentText>
          </ResidentContainer>
        )}
        removeClippedSubviews
      />

    </Container>
  );
};

export default Residents;
