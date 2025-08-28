import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { InputCep } from "../components/Inputs";
import * as cep from "../services/cep.js";
import { CardCep } from "../components/Cards.jsx";

export default function Cep() {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await cep.getCep(value);
      setData(response);
      setError(null);
    } catch (err) {
      setError("CEP inválido ou não encontrado");
      setData(null);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Consulta de CEP</Text>

      <InputCep value={value} setValue={setValue} onSubmit={handleSearch} />

      {error && <Text style={styles.error}>{error}</Text>}

      {data && (
        <View style={styles.result}>
          <CardCep title="Logradouro" value={data.logradouro} />
          <CardCep title="Bairro" value={data.bairro} />
          <CardCep title="Cidade" value={data.localidade} />
          <CardCep title="UF" value={data.uf} />
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
