import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState } from 'react';
import { InputDDD } from "../components/Inputs";
import * as ddd from '../services/ddd.js'
import { CardDDD } from "../components/Cards.jsx";

function ScreenDDD() {

    const [cities, setCities] = useState([])
    const [uf, setUf] = useState("")

    const showCities = (value) => {
        if (!value || value.length !== 2) {
            return;
        }

        ddd.getDDD(value).then((resposta) => {
            console.log(resposta)
            setCities(resposta.cities || [])
            setUf(resposta.state || "...")
        }).catch((error) => {
            console.error('Error fetching DDD:', error)
            setCities([])
            setUf("")
        })
    }

    return (
        <View style={styles.container}>
            <InputDDD onChangeText={(ddd) => showCities(ddd.trim())} />
            <Text style={styles.titulo}>
                CIDADES DE 
                <Text style={{ color: '#6edd13' }}> {uf}</Text>
            </Text>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20, display: 'flex', alignItems: 'center' }}>
                {cities.length > 0 ?
                    (cities.map((cidade, i) => {
                        return <CardDDD key={i} city={cidade} uf={uf} />
                    })) : (
                        <Text style={{ color: 'white', textAlign: 'center', marginTop: 10 }}>
                            Insira um DDD válido para exibir as cidades!
                        </Text>
                    )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: '#5f5f5fff'
    },
    titulo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,     
        marginTop: 16   
    },
    scroll: {
        width: '100%',
        flex: 1,          
        padding: 10,       
        borderRadius: 10, 
    }
})

export default ScreenDDD;
