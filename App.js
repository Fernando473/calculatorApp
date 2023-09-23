import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [number1,setNumber1] = useState('0')
  const [number2,setNumber2] = useState('0')
  const [result, setResult] = useState('0')

  const calcularOperacion = (numero1, numero2, operacion) => {
    try {
      const resultado = operacion(parseFloat(numero1), parseFloat(numero2));
      setResult(resultado);
    } catch (error) {
      Alert.alert('Warning', `${error}`);
    }
  };
  
  const sumar = () => {
    calcularOperacion(number1, number2, (a, b) => a + b);
  };
  
  const restar = () => {
    calcularOperacion(number1, number2, (a, b) => a - b);
  };
  
  const multiplicar = () => {
    calcularOperacion(number1, number2, (a, b) => a * b);
  };
  
  const dividir = () => {
    calcularOperacion(number1, number2, (a, b) => a / b);
  };

  const clear = () =>{
    setNumber1('0')
    setNumber2('0')
    setResult('0')
  }
  
  
  return (
    <View style={styles.container}>
      <Text>Ingresa el número 1</Text>
      <TextInput style={styles.caja} value={number1} onChangeText={setNumber1}/>
      <Text>Ingresa el número 2</Text>
      <TextInput style={styles.caja} value={number2} onChangeText={setNumber2}/>
      <Button title='Sumar' onPress={sumar}  />
      <Button title='Restar' onPress={restar}/>
      <Button title='Multiplicar' onPress={multiplicar}/>
      <Button title='Dividir' onPress={dividir}/>


      <Text>El resultado de la operacion es</Text>
      <Text style={styles.result} >{result}</Text>
      <Button title='Limpiar Campos' onPress={clear}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  button:{
    paddingTop:3,
    marginTop:3
  },
  caja :{
    paddingHorizontal:5,
    borderColor:"black",
    borderWidth: 2
  },
  result:{
    fontSize: 23 
  }

});
