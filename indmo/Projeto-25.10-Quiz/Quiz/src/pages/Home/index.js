import React from 'react'
import {Text,StyleSheet,View,Button,Image} from 'react-native';


export default function Home ({ navigation, route })  {
    return(
  <View style={styles.container}>
   <Image
   style={styles.tinyLogo}
   source={require('../../../assets/oi.png')}/>
   <Text style={styles.texto}>Quiz</Text>
   <View style={styles.container2}>
   <Text style={styles.texto2}>Teste o seu<br/>conhecimento</Text>
   <Button title="Vamos começar" onPress={() =>{ navigation.navigate("Quiz")}}/>
   </View>
  </View>
    )
 
}

const styles = StyleSheet.create({
container:{
    height: '100%',
    // paddingTop: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(138,43,226)',
},
tinyLogo:{
    width: 300,
    height:300,
},
texto:{
   fontSize:30, 
   fontFamily: 'Helvetica',
   color: '#fff',
},
container2:{
    padding:5,
    textAlign: 'center',
},
texto2:{
    padding:10,
    fontSize:30, 
    fontFamily: 'Helvetica',
    color: '#fff',
 }

});

