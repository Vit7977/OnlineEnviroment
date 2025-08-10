import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import ScreenDDD from './screens/ScreenDDD';

export default function App() {
  return (
    <View style={styles.container}>
      <ScreenDDD/>
      <StatusBar style="auto" />
    </View>
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
