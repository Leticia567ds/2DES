import { View, Text } from 'react-native';

import style from './style'
import FiltrarChamados from '../../components/FiltrarChamados/index.js';
import ListarChamados from '../../components/ListarChamados/index.js';

export default function Home({routes}) {
 
    return (
        <View style={style.container}>
            <FiltrarChamados />
            <ListarChamados/>
            {}
        </View>
    )
}
