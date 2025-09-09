import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState } from 'react';
import { InputHolidays } from "../components/Inputs";
import * as holiday from '../services/holiday.js';
import { CardHolidays } from "../components/Cards.jsx";

function ScreenHolidays() {
    const [holidays, setHolidays] = useState([]);
    const [ano, setAno] = useState("");

    const showHolidays = (value) => {
        if (!value || value.length !== 4) {
            return;
        }
        holiday.getHolidays(value).then((resposta) => {
            console.log(resposta);
            setHolidays(resposta);
        }).catch((error) => {
            console.error('Error fetching holidays:', error);
            setHolidays([]);
        });
    };

    return (
        <View style={styles.container}>
            <InputHolidays
                onChangeText={(text) => {
                    const year = text.trim();
                    setAno(year);
                    showHolidays(year); 
                }}
            />

            <Text style={styles.titulo}>
                FERIADOS NACIONAIS DE
                <Text style={{ color: '#6edd13' }}> {ano}</Text>
            </Text>

            <ScrollView
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20,
                    alignItems: 'center',
                    flexGrow: 1,
                    justifyContent: "flex-start"
                }}
            >
                {holidays.length > 0 ? (
                    holidays.map((feriado, i) => (
                        <CardHolidays key={i} name={feriado.name} date={feriado.date} />
                    ))
                ) : (
                    <Text style={{ color: '#c4c4c4ff', textAlign: 'center', fontSize: 16 }}>
                        Insira um ANO válido para exibir os feriados nacionais!
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
        backgroundColor: '#3d3d3dff'
    },
    titulo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 16
    },
    scroll: {
        width: '40%',
        flex: 1,
        padding: 10,
        borderRadius: 10,
    }
});

export default ScreenHolidays;
