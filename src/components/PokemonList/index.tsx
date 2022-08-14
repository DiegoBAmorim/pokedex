import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native'
import api from '../../services/api';
import { Container, WrapperTxt, PokemonName, Type, TypeName, TypesView, Image } from './styles';


interface Props {
    data: {
        name: string;
        url: string;
    }
}

interface Type{
    slot: number;
    type: {
        name: String;
        url: String;
    }
}

interface TypeArray extends Array<Type>{}

const PokemonList: React.FC<Props> = ({data}) => {
    const [image, setImage] = useState();
    const [type, setType] = useState<TypeArray>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() =>{
        getData();
    }, []);
    const getData = async () => {
        await api.get(data.url).then((response) => setImage(response.data.sprites.other.home.front_default)).catch((err) => console.log(err));
         await api.get(data.url).then((response) => setType(response.data.types)).catch(err => console.log(err));
         setIsLoading(false)
    }

    if(isLoading) {
        return (
            <ActivityIndicator />
        )
    }

    return(
        <Container>
        <Image 
        source={{uri: image}}
        />
        <PokemonName>{data.name}</PokemonName>
        <TypesView>
        {type.map((item, i) => {
            return (
            <Type key={i} color={item.type.name}>
                <TypeName>{item.type.name}</TypeName>
            </Type>
                )
            })}
        </TypesView>
        </Container>
        
    )
}

export default PokemonList;