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
    <Container type="poison" {...rest}>
      <LeftSide>
        <PokemonId></PokemonId>
        <PokemonName></PokemonName>
        <ImageCardDetailLeftSide source={{ uri: '' }}></ImageCardDetailLeftSide>
        <PokemonContentType>
          <PokemonType type="poison">
            <PokemonTypeText></PokemonTypeText>
          </PokemonType>
        </PokemonContentType>
      </LeftSide>
      <RightSide></RightSide>
    </Container>
  );
}
