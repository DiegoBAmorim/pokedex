import styled from 'styled-components/native';

interface Color{
    color: String;
}

const handleColorType = (color: String) => {
    switch(color){
        case 'grass': 
        return '#62B957'
        case 'fire':
        return '#FD7D24'
        case 'bug':
        return '#8CB230'
        case 'dark':
        return '#58575F'
        case 'dragon':
        return '#0F6AC0'
        case 'electric':
        return '#EED535'
        case 'fairy':
        return '#ED6EC7'
        case 'fighting':
        return '#D04164'
        case 'flying':
        return '#748FC9'
        case 'ghost':
        return '#556AAE'
        case 'grass':
        return '#62B957'
        case 'ground':
        return '#DD7748'
        case 'ice':
        return '#61CEC0'
        case 'normal':
        return '#9DA0AA'
        case 'poison':
        return '#A552CC'
        case 'psychic':
        return '#EA5D60'
        case 'rock':
        return '#BAAB82'
        case 'psychic':
        return '#EA5D60'
        case 'steel':
        return '#417D9A'
        case 'water':
        return '#4A90DA'
        default: 
        return 'red'
    }
}

export const Container = styled.View`
border-radius: 10px;
margin-left: 24px;
margin-right: 24px;
height: 120px;
margin-bottom: 30px;
background-color: green;
`;
export const WrapperTxt = styled.Text`
flex-direction: column;
border: 1px solid red;
`;

export const PokemonName = styled.Text`
color: #FFF;
text-transform: capitalize;
font-weight: bold;
font-size: 24px;
padding-left: 24px;
padding-top: 10px;
`;

export const TypesView = styled.View`
flex-direction: row;
padding-top: 10px;
`;

export const Type = styled.View<Color>`
padding: 10px;
margin-left: 10px;
margin-right: 10px;
border-radius: 10px;
background: ${({ color }) => handleColorType(color)};
`;

export const TypeName = styled.Text`
color: #FFF
text-transform: capitalize;
`;

export const Image = styled.Image`
height: 130px;
width: 130px;
position: absolute;
right: 0;
bottom: 40px;
`;

