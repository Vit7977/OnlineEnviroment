import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons'
import ScreenDDD from './screens/ScreenDDD';
import ScreenHolidays from './screens/ScreenHolidays';
import ScreenCnpj from './screens/ScreenCnpj';
import ScreenCep from './screens/ScreenCep';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator screenOptions={{
        headerStyle:{backgroundColor: '#222222'},
        headerTintColor: '#fff',
        drawerStyle: {backgroundColor: '#222222'},
        drawerLabelStyle: {color: '#fff'},
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
      }}>
        <Drawer.Screen name="DDD" component={ScreenDDD} options={{drawerIcon: ({color, size}) => (<Ionicons name='call' size={size} color={color}/>)}}/>
        <Drawer.Screen name="Feriados Nacionais" component={ScreenHolidays} options={{drawerIcon: ({color, size}) => (<Ionicons name='calendar' size={size} color={color}/>)}}/>
        <Drawer.Screen name="CNPJ" component={ScreenCnpj} options={{drawerIcon: ({color, size}) => (<Ionicons name='briefcase' size={size} color={color}/>)}}/>
        <Drawer.Screen name="CEP" component={ScreenCep} options={{drawerIcon: ({color, size}) => (<Ionicons name='business' size={size} color={color}/>)}}/>
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
