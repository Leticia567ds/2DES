import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

export default function Home({navigation}){
    const info = [
        {
            "imagem":"https://www.designi.com.br/images/preview/10000490.jpg",
            "Nome da pizza": "Nome da pizza",
            "Descricao": "Descricao da Pizza",
        },
        {
            "imagem":"https://www.designi.com.br/images/preview/10000490.jpg",
            "Nome da pizza": "Nome da pizza",
            "Descricao": "Descricao da Pizza",
        },
        {
            "imagem":"https://www.designi.com.br/images/preview/10000490.jpg",
            "Nome_da_pizza": "Nome da pizza",
            "Descricao": "Descricao da Pizza",
        }
]
 const funcao = () =>{


 }
//  return (
//     <ScrollView style={styles.container}>
//         {
//             data.map((item, index) => {
//                 return(
//                     <TouchableOpacity style={styles.item} key={index} onPress={() =>{ navigation.navigate("Carrinho", {"info":item.info}) }}>
//                         <Text style={styles.title}>{item.Nome_da_pizza}</Text>
//                         <Text>{item.Descricao}</Text>
//                     </TouchableOpacity>
//                 )
//             })
//         }
//         <ButtonCadastrar value="Finalizar" onPress={funcao}/>
//     </ScrollView>
// );


}
