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

export function InputCnpj({onChangeText}){
   return (
   <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholder="CNPJ..."
                maxLength={14}
                keyboardType="numeric"
                onChangeText={onChangeText}
            />
        </View>
        );
}

export function InputCep({onChangeText}){
    return (
    <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholder="CEP..."
                maxLength={8}
                keyboardType="numeric"
                onChangeText={onChangeText}
            />
        </View>
        )
}

export function InputISBN({onChangeText}){
    return (
    <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholder="ISBN..."
                maxLength={13}
                keyboardType="numeric"
                onChangeText={onChangeText}
            />
        </View>
        )
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

export default { InputDDD, InputHolidays, InputCnpj, InputCep, InputISBN }