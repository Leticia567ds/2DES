import * as React from 'react';
import { View, Text,StyleSheet,Button, TouchableOpacity ,Image} from 'react-native';
import { RadioButton } from 'react-native-paper';
// export default function pergunta01({ navigation });
export default function Quiz ({ navigation })  {
    const [checked, setChecked] = React.useState('first');
    return(
        <View style={styles.container}>

            <View  style={styles.Logo}>
            <Image
   style={{width: '200px', height: '200px', border: '5px solid #993399' }}
   source={require('../../../assets/sorrindo.jpg')}/>
           </View>
            <View><Text  style={styles.texto}>Quantos dentes tem um ser humano na face adulto</Text></View>
        <View>
        <Text Text  style={styles.texto2}>28</Text>
        <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
        />
        </View>
        <View>
        <Text Text  style={styles.texto2}>32</Text>
        <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
        />
        </View>
        <View>
        <Text Text  style={styles.texto2}>20</Text>
        <RadioButton
        value="leticia"
        status={ checked === 'leticia' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('leticia') }
      />
       </View>
        <Button title="Next" onPress={() =>{ navigation.navigate("Quiz3")}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        display: 'flex',
        padding: '10%',
        backgroundColor: 'rgb(138,43,226)',
    },
    Logo:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    texto:{
        padding: '10px',
        fontSize:19, 
        fontFamily: 'Helvetica',
        color: '#fff',
    },
    texto2:{
        display: 'flex',
     textAlign: 'center',
     color: '#fff',
     fontSize: 18,
    }
});