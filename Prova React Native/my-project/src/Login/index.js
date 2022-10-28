import { useState } from 'react';
import React from 'react';
import{View, Text, Button, Image,StyleSheet,TextInput} from 'react-native'

export default function Login({navigation}){

    const [email1, setEmail] = useState("user01@dog.com");
    const [password, setPassword] = useState("dog123");

    const users =[
        { 
            "id": 1,
            "email": "user01@dog.com",
            "senha": "dog123",

        }
    ]

    return(
        <View  style={styles.container}>
            <View style={styles.img}>
            <Image/>
            </View>
            <View style={styles.text}>
            <TextInput style={{border: '1px solid #000'}} onChangeText={(value) => {setEmail(value)}} />
            <TextInput  style={{border: '1px solid #000'}}  onChangeText={(value) => {setPassword(value)}} />
            <Button title="Login" onPress={() => {
             users.forEach(user => {
                users.forEach(user => {
                    if(user.email === email1 && user.senha === password) navigation.navigate("Home", {"id": user.id - 1})
                 })
                 
             })
            } } />
            </View>
        </View>
        
        )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        display: 'flex',
        padding: '10%',
     backgroundColor: '#505050',
    },
    text:{
        backgroundColor:'white',
    }
});

