import React, { useEffect, useState } from 'react';

import { Card, Pokemon, PokemonType } from '../../components/Card';

import pokeballHeader from '../../assets/items/pokeball.png';
import api from '../../services/api';

import { Container, Header, List, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

type Request = {
  id: number;
  types: PokemonType[];
};

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();

  useEffect(() => {
    getPokemon();
  }, []);

  const navigationPage = (pokemonId: number) => {
    navigate('Details', { pokemonId });
  };

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
        ListHeaderComponent={
          <>
            <Header source={pokeballHeader} />
            <Title>Pokedex</Title>
          </>
        }
        data={pokemons}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        keyExtractor={(pokemon: any) => String(pokemon.name)}
        renderItem={({ item }: any) => (
          <Card data={item} onPress={() => navigationPage(item.id)} />
        )}
      />
    </Container>
  );
};

export default Home;
