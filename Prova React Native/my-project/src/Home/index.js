import { useState } from "react";
import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.t}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: "50px",
          }}
          onPress={() => {
            navigation.navigate("Historico");
          }}
        >
          <Image
            source={require("../../assets/arquivo.png")}
            style={{ width: "40px", height: "40px" }}
          />
          <Text style={{ margin: "20px", color: "#8A66FA" }}>
            Histórico de Vacinas
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.v}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: "50px",
          }}
          onPress={() => {
            navigation.navigate("Registro");
          }}
        >
          <Image
            source={require("../../assets/vacinacao.png")}
            style={{ width: "40px", height: "40px" }}
          />
          <Text
            style={{ margin: "20px", color: "#8A66FA", flexDirection: "row" }}
          >
            Registrar Vacinas
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    Display: "flex",
    backgroundColor: "#505050",
    height: "100%",
  },
  v: {
    backgroundColor: "#fff",
    height: "25%",
    width: "30%",
    margin: "10px",
    borderRadius: "15px",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  t: {
    backgroundColor: "#fff",
    height: "25%",
    width: "30%",
    margin: "10px",
    borderRadius: "15px",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    // flexDirection: 'row',
  },
});
