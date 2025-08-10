import { StyleSheet, View, Text } from "react-native";

export function CardDDD({city, uf}){
    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold', color: '#fff'}}> {city} | {uf} </Text>
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
        backgroundColor: '#494949',
        marginTop: '1rem',
        marginBottom: '1rem'
    }
})

export default { CardDDD }