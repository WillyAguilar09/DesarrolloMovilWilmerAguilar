import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const CalculatorComponent = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operation, setOperation] = useState('');
  const [mensaje, setMensaje] = useState('');

  const calcular = () => {
    const numA = Number(a.trim());
    const numB = Number(b.trim());
    const oper = Number(operation.trim());

    let res: number;

    switch (oper) {
      case 1:
        res = numA + numB;
        break;
      case 2:
        res = numA - numB;
        break;
      case 3:
        res = numA * numB;
        break;
      case 4:
        res = numB !== 0 ? numA / numB : NaN;
        break;
      default:
        setMensaje("Operación inválida. Usa 1, 2, 3 o 4.");
        return;
    }

    const texto = isNaN(res)
      ? 'Resultado inválido'
      : `Resultado: ${res}`;
    setMensaje(texto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧮 Calculadora</Text>

      <TextInput
        placeholder="Valor A"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
        style={styles.input}
        placeholderTextColor="#888"
      />

      <TextInput
        placeholder="Valor B"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
        style={styles.input}
        placeholderTextColor="#888"
      />

      <TextInput
        placeholder="Operación (1: +, 2: -, 3: *, 4: /)"
        keyboardType="numeric"
        value={operation}
        onChangeText={setOperation}
        style={styles.input}
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {mensaje !== '' && (
        <Text style={styles.result}>{mensaje}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4f9',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#333',
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
    elevation: 2,
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  result: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d3436',
    backgroundColor: '#dfe6e9',
    padding: 10,
    borderRadius: 8,
  },
});

export default CalculatorComponent;