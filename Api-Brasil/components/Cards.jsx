import { StyleSheet, View, Text } from "react-native";

export function CardDDD({ city, uf }) {
    return (
        <View style={[styles.card, styles.cardDDD]}>
            <Text style={styles.cardText}> {city} | {uf} </Text>
        </View>
    );
}

export function CardHolidays({ name, date }) {
    return (
        <View style={[styles.card, styles.cardHoliday]}>
            <Text style={styles.cardTextUpper}> {name} | {date} </Text>
        </View>
    );
}

export function CardCnpj({ name, fantasia, abertura, situacao, uf, cidade, bairro, rua, numero, cep }) {
    return (
        <View style={[styles.card, styles.cardCnpj]}>
            <Text style={styles.cardTitle}>{name}</Text>
            <Text style={styles.cardText}>{fantasia}</Text>
            <Text style={styles.cardText}>{abertura}</Text>
            <Text style={styles.cardText}>{situacao} | {uf} | {cidade}</Text>
            <Text style={styles.cardText}>{bairro} | {rua} | {numero}</Text>
            <Text style={styles.cardText}>{cep}</Text>
        </View>
    );
}

export function CardCep({ cidade, uf, bairro, rua }) {
    return (
        <View style={[styles.card, styles.cardCep]}>
            <Text style={styles.cardTextUpper}> {cidade}</Text>
            <Text style={styles.cardTextUpper}> {uf} </Text>
            <Text style={styles.cardTextUpper}> {rua} </Text>
            <Text style={styles.cardTextUpper}> {bairro} </Text>
        </View>
    );
}

export function CardISBN({ autor, titulo, ano, publicador}) {
    return (
        <View style={[styles.card, styles.cardCep]}>
            <Text style={styles.cardTextUpper}> {titulo}</Text>
            <Text style={styles.cardTextUpper}> {autor} </Text>
            <Text style={styles.cardTextUpper}> {publicador} </Text>
            <Text style={styles.cardTextUpper}> {ano} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginVertical: 10,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        alignSelf: 'center',
        elevation: 4, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    cardDDD: {
        backgroundColor: '#4a4a4a',
    },
    cardHoliday: {
        backgroundColor: '#1c8f35',
    },
    cardCnpj: {
        backgroundColor: '#2e2e2e',
    },
    cardCep: {
        backgroundColor: '#3c3c3c',
        width: 200,
    },
    cardText: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
    },
    cardTextUpper: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    cardTitle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 4,
    }
});

export default { CardDDD, CardHolidays, CardCnpj, CardCep };