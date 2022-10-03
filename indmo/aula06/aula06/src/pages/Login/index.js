import { View, TextInput, Image } from 'react-native';

import style from './style'

import ButtonLogin from '../../components/ButtonLogin/index.js';

import {useState} from 'react';

export default function Login({navigation}){

  const users =
  [
{
           "id":1, 
           "email":"user01@empresa.com",
           "senha": "teste2006",
}

]
const [email, setEmail] = useState();
const [senha, setSenha] = useState();

const img = require("../../../assets/logo.png");


    const analisr = () =>{
    users.forEach(usuario => {

    if(email == usuario.email && senha == usuario.senha){
        navigation.navigate('Home', { 'info': usuario.id })
    } else {
        console.log("ERRO!")
    }
})
}


return (
    <View style={style.container}>
        <Image style={style.img} source={{ uri: img }} />
        <TextInput style={style.txtInput} placeholder='E-mail' placeholderTextColor="gray" value={email} onChangeText={(val) => { setEmail(val) }} />
        <TextInput style={style.txtInput} placeholder='Senha' placeholderTextColor="gray" value={senha} onChangeText={(val1) => { setSenha(val1) }} />
        <ButtonLogin value="Login" onPress={analisr} />
    </View>

)
}