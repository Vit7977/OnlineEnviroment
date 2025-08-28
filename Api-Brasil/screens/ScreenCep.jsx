import { StyleSheet, View, Text} from "react-native";
import { useState } from "react";
import { InputCep } from "../components/Inputs";
import * as CEP from "../services/cep.js";
import { CardCep } from "../components/Cards.jsx";

export default function ScreenCep() {

  const [cep, setCep] = useState(null)

  const showCep = (value) => {
          if (!value || value.length !== 8) {
              return;
          }
  
          CEP.getCep(value).then((resposta) => {
              console.log(resposta)
              setCep(resposta || null)
          }).catch((error) => {
              console.error('Error fetching CEP:', error)
              setCep(null)
          });
        }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de CEP</Text>

      <InputCep onChangeText={(text) => showCep(text.trim())} />

      {cep ? (
        <View>
          <CardCep cidade={cep.city} 
          uf={cep.state} 
          bairro={cep.neighborhood} 
          rua={cep.street} />
        </View>
            ) : (
                <View><Text>Insira um CEP valido!</Text></View>
            )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: '#3d3d3dff' },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10, color: '#fff' },
});
