import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
background: ${({ theme }) => theme.colors.background};
padding: 20px;
`;

export const List = styled.FlatList`
flex: 1;

`;