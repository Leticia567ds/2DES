


import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style.js'

export default function Home({ navigation, route }) {
    const { login, detalhes } = route.params;
    return (
        <View>
        <TouchableOpacity style={style.container}>
            <View>
                <Text style={{ fontWeight: 'bold' }}>Manutenção de Roteador</Text>
            </View>
            <View>
                <Text style={style.text}>
                {"Cliente reclamou que está sem internet, pissível troca"}</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}
