import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorComponent from './componentes/CalculatorComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <CalculatorComponent a={10} b={5} operation={4}></CalculatorComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
