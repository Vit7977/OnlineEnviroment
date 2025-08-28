import { StyleSheet, View, Text } from "react-native";

export function CardDDD({city, uf}){
    return (
        <View style={[{backgroundColor: '#494949'}, styles.container]}>
            <Text style={{fontWeight: 'bold', color: '#fff'}}> {city} | {uf} </Text>
        </View>
    );
}

export function CardHolidays({name, date}){
    return (
        <View style={[{backgroundColor: '#127e2d'}, styles.container]}>
            <Text style={{color: '#fff', fontWeight: 'bold', textTransform: 'uppercase'}}> {name} | {date} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20rem',
        height: '3rem',
        borderRadius: '8px',
        marginTop: '1rem',
        marginBottom: '1rem'
    }
})

export default { CardDDD, CardHolidays }