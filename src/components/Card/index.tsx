import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  LeftSide,
  PokemonId,
  PokemonName,
  ImageCardDetailLeftSide,
  PokemonContentType,
  PokemonType,
  PokemonTypeText,
  RightSide,
  PokemonImage,
  PokeballDetail,
} from './styles';

import dotsImage from '../../assets/items/dots.png';
import pokeballImage from '../../assets/items/pokeballCard.png';

export type PokemonType = {
  type: {
    name: string;
  };
};

export type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
};

type Props = {
  data: Pokemon;
} & TouchableOpacityProps;

export function Card({ data, ...rest }: Props) {
  return (
    <Container type={data.types[0].type.name} {...rest}>
      <LeftSide>
        <PokemonId>#{data.id}</PokemonId>
        <PokemonName>{data.name}</PokemonName>
        <ImageCardDetailLeftSide source={dotsImage} />
        <PokemonContentType>
          {data.types.map((pokemonType, i) => (
            <PokemonType type={pokemonType.type.name} key={i}>
              <PokemonTypeText>{pokemonType.type.name}</PokemonTypeText>
            </PokemonType>
          ))}
        </PokemonContentType>
      </LeftSide>
      <RightSide>
        <PokeballDetail source={pokeballImage} />
        <PokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          }}
        />
      </RightSide>
    </Container>
  );
}
