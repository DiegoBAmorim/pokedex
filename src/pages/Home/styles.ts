import styled, { css } from 'styled-components/native';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width
export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};

`;

export const List = styled.FlatList`
  flex: 1;
`;

export const Header = styled.ImageBackground`
  ${({ theme }) => css`
  width: ${windowWidth}px;
    height: 220px;
    background: ${theme.colors.background}
    margin-left: -20px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.light_text}
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;
  `}
`;