import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Historico({ navigation, route }) {
    const [busca, setBusca] = useState("");


    const data = [
        {
            "Pet": "Bichano",
            "Veterinario": "Fulano",
            "Vacina": "Vicinarius",
            "Data": "27/10/2022"
        },
        {
            "Pet": "fofurinha",
            "Veterinarío": "beltrano",
            "Vacina": "vacininha",
            "Data": "28/10/2022"
        },
        {
            "Pet": "raivoso",
            "Veterinarío": "Malunquio",
            "Vacina": "Astravac",
            "Data": "30/05/2022"
        },
    ]
    
    "chamados": [
        {
            "titulo":"Bichano",
            
        },
        {
            "titulo":"Vicinario",
         
        },
        {
            "titulo":"Manutenção de Roteador",
            "descricao":"Cliente reclamou que está sem internet, possível troca"
        }
    ]



    return (
        <View style={{ backgroundColor: '#505050', height: '100%', width: '100%', padding: '20px' }}>
            <TextInput onChangeText={(value) => setBusca(value)} style={{ backgroundColor:'white', alignItems:'center', height: '30px'}} placeholder="Digite para Buscar" />
            {
                
                data.map((item, index) => {
                    if(item.titulo.toLowerCase().includes(busca.toLowerCase())) {
                    return (
                        <View style={styles.Pet} key={index}>
                            <Text style={{ color: '#fff' }}>{item.Pet}</Text>
                            <Text style={{ color: '#fff' }}>{item.Veterinario}</Text>
                            <Text style={{ color: '#fff' }}>{item.Vacina}</Text>
                            <Text style={{ color: '#fff' }}>{item.Data}</Text>
                            <br />
                        </View>
                    )
                    }

                })
            }
        </View>
    )
}
const styles = StyleSheet.create({
    Pet: {
        width: '100%',
        height: '15%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        padding: '10px',
        margin: '10px'
    },

});

