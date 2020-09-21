import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

import {
  Container, Title, FlatList, SearchContainer,
} from './styles';

interface Character {
  _id: string;
  name: string;
  image: string;
}

interface SearchFormData {
  search: string
}

const Characters: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [characters, setCharacters] = useState<Character[]>([]);

  const handleSearch = useCallback((data: SearchFormData) => {
    const { search } = data;
    api.get(`character/${search}`).then((response) => {
      console.log(response.data);
      setCharacters([response.data]);
    });
  }, []);

  useEffect(() => {
    api.get('character').then((response) => {
      setCharacters(response.data);
    });
  }, []);

  return (
    <Container>
      <Title>Personagens</Title>
      <Form ref={formRef} onSubmit={handleSearch}>
        <Input name="search" icon="search" placeholder="Pesquise pelo nome" returnKeyType="search" />
        <Button onPress={() => {
          formRef.current?.submitForm();
        }}
        >
          Pesquisar

        </Button>
      </Form>
      <FlatList
        data={characters}
        keyExtractor={(character) => character._id}
        renderItem={({ item: character }) => (
          <Card source={character.image}>{character.name}</Card>
        )}
        removeClippedSubviews
      />
      {/* {characters.map((character: Character) => (
            <Card key={character._id} source={character.image}>{character.name}</Card>
          ))} */}
    </Container>
  );
};

export default Characters;
