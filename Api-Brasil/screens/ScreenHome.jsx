import { StyleSheet, View, Text} from "react-native";

export default function ScreenHome(){

    return(
        <View style={style.container}>
            <Text style={style.text}>
                API <Text style={{color: '#ffee00ff'}}>BRASIL</Text>
            </Text>
        </View>
    )

};
const style = StyleSheet.create({
    container: 
    {   flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: '#2f3332ff',
        justifyContent: 'center',
        textAlign: 'center',
    },
    text:{
        color: '#11702dff',
        fontSize: 70,
        fontFamily: 'JetBrains Mono',
        backgroundColor: '#b7beb7ff',
        borderRadius: 10,
    }
});