import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Card } from '../../components/Card';
import Menu from '../../components/Menu';
import PokemonList from '../../components/PokemonList';
import api from '../../services/api';
import { Container, List } from './styles';

type PokemonType = {
  type: string;
};

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
};

type Request = {
  id: number;
  types: PokemonType[];
};

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const response = await api.get('/pokemon');
    const { results } = response.data;

    const payloadPokemons = await Promise.all(
      results.map(async (pokemon: Pokemon) => {
        const { id, types } = await getMoreInfo(pokemon.url);

        return {
          name: pokemon.name,
          id,
          types,
        };
      }),
    );
    setPokemon(payloadPokemons);
  };

  const getMoreInfo = async (url: string): Promise<Request> => {
    const response = await api.get(url);

    const { id, types } = response.data;

    return {
      id,
      types,
    };
  };
  return (
    <>
      <Container>
        <Menu />
        {loading === true && <ActivityIndicator />}
        <List
          data={pokemon}
          keyExtractor={(item: any) => String(item.name)}
          renderItem={({ item }: any) => <Card />}
        />
      </Container>
    </>
  );
};

export default Home;
