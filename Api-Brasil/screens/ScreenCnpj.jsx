import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { InputCnpj } from "../components/Inputs.jsx";
import * as CNPJ from '../services/cnpj.js'
import { CardCnpj } from "../components/Cards.jsx";

export default function ScreenCnpj() {
  const [cnpj, setCnpj] = useState(null);

    const showCnpj = (value) => {
          if (!value || value.length !== 14) {
              return;
          }
  
          CNPJ.getCnpj(value).then((resposta) => {
              console.log(resposta)
              setCnpj(resposta || null)
          }).catch((error) => {
              console.error('Error fetching CNPJ:', error)
              setCnpj(null)
          });
        }
  return (
    <View style={styles.container}>
      <InputCnpj  onChangeText={(text) => showCnpj(text.trim())}/>
      <Text style={styles.title}>Consulta de CNPJ</Text>

      {cnpj ? (
        <View style={styles.result}>
          <CardCnpj 
            name={cnpj.razao_social} 
            fantasia={cnpj.nome_fantasia}
            abertura={cnpj.data_inicio_atividade}
            situacao={cnpj.decricao_situacao_cadastral}
            uf={cnpj.uf}
            cidade={cnpj.municipio}
            bairro={cnpj.bairro}
            rua={cnpj.logradouro}
            numero={cnpj.numero}
            cep={cnpj.cep} />
        </View>
      ) : (
          <View><Text>Insira um CNPJ valido!</Text></View>
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
