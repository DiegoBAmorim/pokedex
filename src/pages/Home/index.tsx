import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Card } from '../../components/Card';
import Menu from '../../components/Menu';
import PokemonList from '../../components/PokemonList';
import api from '../../services/api';
import { Container, List } from './styles';
import { Pokemon } from '../../components/Card';
import { PokemonType } from '../../components/Card';
import { FadeAnimation } from '../../components/FadeAnimation';

type Request = {
  id: number;
  types: PokemonType[];
};

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
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
    setPokemons(payloadPokemons);
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
    <Container>
      <List
        data={pokemons}
        keyExtractor={(pokemon: any) => String(pokemon.id.toString())}
        renderItem={({ item }: any) => (
          <FadeAnimation>
            <Card data={item} />
          </FadeAnimation>
        )}
      />
    </Container>
  );
};

export default Home;
