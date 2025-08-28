import { StyleSheet, View, Text} from "react-native";
import { useState } from "react";
import { InputISBN } from "../components/Inputs";
import * as ISBN from "../services/isbn.js";
import { CardISBN } from "../components/Cards.jsx";

export default function ScreenIsbn() {

  const [isbn, setIsbn] = useState(null)

  const showISBN = (value) => {
          if (!value || value.length !== 13) {
              return;
          }
  
          ISBN.getIsbn(value).then((resposta) => {
              console.log(resposta)
              setIsbn(resposta || null)
          }).catch((error) => {
              console.error('Error fetching ISBN:', error)
              setIsbn(null)
          });
        }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de ISBN</Text>

      <InputISBN onChangeText={(text) => showISBN(text.trim())} />

      {isbn ? (
        <View>
          <CardISBN
            titulo={isbn.title}
            autor={isbn.authors?.join(', ')}
            sinopse={isbn.synopsis}
            ano={isbn.year}
            publicador={isbn.publisher}
          />
        </View>
            ) : (
                <View><Text>Insira um ISBN valido!</Text></View>
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
