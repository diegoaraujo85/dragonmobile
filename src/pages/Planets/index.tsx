import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Card from '../../components/Card';
import Button from '../../components/Button';

import api from '../../services/api';

import {
  Container, Title, FlatList, PlanetContainer,
} from './styles';

interface Planet {
  _id: string;
  name: string;
  image: string;
  residents: string[];
}

const Planets: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  // const [residents, setResidents] = useState<Residents[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    api.get('planet').then((response) => {
      setPlanets(response.data);
    });
  }, []);

  const navigateToResidents = useCallback(
    (residents: string[], planet: string) => {
      navigation.navigate('Residents', { residents, planet });
    },
  );

  return (
    <Container>
      <Title>Planetas</Title>
      <FlatList
        data={planets}
        keyExtractor={(planet) => planet._id}
        removeClippedSubviews
        renderItem={({ item: planet }) => (
          <PlanetContainer>
            <Card source={planet.image}>{planet.name}</Card>
            <Button onPress={() => navigateToResidents(planet.residents, planet.name)}>
              {`Moradores de ${planet.name}`}
            </Button>
          </PlanetContainer>
        )}
      />
    </Container>
  );
};

export default Planets;
