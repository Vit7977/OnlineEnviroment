import { View, TextInput, StyleSheet } from "react-native";

export function InputDDD({onChangeText}){
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholder="DDD..."
                maxLength={2}
                keyboardType="numeric"
                onChangeText={onChangeText}
            />
        </View>
    );
}

export function InputHolidays({onChangeText}){
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholder="Ano..."
                maxLength={4}
                keyboardType="numeric"
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        display: "flex", 
        alignItems: 'center', 
        marginTop: '1rem'
    },
    
    input: {
        width: '90%',
        height: '2rem',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#000000',
        borderRadius: '6px',
        color: 'white',
        padding: '5px',
        
    }
})

export default { InputDDD }