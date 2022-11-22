import { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


export default function App(){

  const [posts, setPosts] = useState({results:[]});

  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res =>{return res.json()})
    .then(data =>{
      setPosts(data);
    })
  })
  return (
    <View style={styles.container}>
      {
        posts.results.map((post,index)=>{
          return(
            <View style={styles.prin} key={index}>
            <Text>{post.name}</Text>
            <Image style={styles.img} source={{uri:post.url[{}]}}/>
            </View>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    margin: '3px',
},
prin:{
  display:'flex',
},
  img:{
    width:'15vw',
    height:'10vh'
}
})