import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { InputCnpj } from "../components/Inputs"; 
import * as cnpj from "../services/cnpj.js";
import { CardCnpj } from "../components/Cards.jsx";

export default function Cnpj() {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await cnpj.getCnpj(value);
      setData(response);
      setError(null);
    } catch (err) {
      setError("CNPJ inválido ou não encontrado");
      setData(null);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Consulta de CNPJ</Text>

      <InputCnpj value={value} setValue={setValue} onSubmit={handleSearch} />

      {error && <Text style={styles.error}>{error}</Text>}

      {data && (
        <View style={styles.result}>
          <CardCnpj title="Nome" value={data.nome} />
          <CardCnpj title="Fantasia" value={data.fantasia} />
          <CardCnpj title="Abertura" value={data.abertura} />
          <CardCnpj title="Situação" value={data.situacao} />
          <CardCnpj title="UF" value={data.uf} />
          <CardCnpj title="Município" value={data.municipio} />
          <CardCnpj title="Bairro" value={data.bairro} />
          <CardCnpj title="Logradouro" value={data.logradouro} />
          <CardCnpj title="Número" value={data.numero} />
          <CardCnpj title="CEP" value={data.cep} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  error: { marginTop: 10, color: "red" },
  result: { marginTop: 20, gap: 10 },
});
