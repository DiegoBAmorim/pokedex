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
} from './styles';

import dotsImage from '../../assets/items/dots.png';

type PokemonType = {
  type: {
    name: string;
  };
};

type Pokemon = {
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
        <ImageCardDetailLeftSide source={dotsImage}></ImageCardDetailLeftSide>
        {data.types.map(pokemonType => (
          <PokemonContentType>
            <PokemonType type={pokemonType.type.name}>
              <PokemonTypeText>{pokemonType.type.name}</PokemonTypeText>
            </PokemonType>
          </PokemonContentType>
        ))}
      </LeftSide>
      <RightSide></RightSide>
    </Container>
  );
}
