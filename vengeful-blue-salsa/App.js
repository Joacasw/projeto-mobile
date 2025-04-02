import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 
const App = () => {
    const [temporizador, setTemporizador] = useState(0);
    const [status, setStatus] = useState(false);
 
    useEffect(() => {
        let interval;
        if (status == true) {
          interval = setInterval(() => {
            setTemporizador((prev) => prev + 1);}, 1000);
        }
        else {
            clearInterval(interval)
        }
 
        return() => clearInterval(interval);
    }, [status]);
 
    const habilitar = () => {
      setStatus(!status);
    };
 
    const reset = () => {
      setTemporizador(0);
      setStatus(false);
    }
 
    const formatacao = () => {
        const minutos = Math.floor(temporizador / 60);
        const segundos = temporizador % 60;
        return minutos + ":" + segundos;
    }
 
    return (
        <View style={styles.corpo}>
          <Text style={styles.cronometro}>{formatacao(temporizador)}</Text>
          <View style={styles.containerbotoes}>
            <TouchableOpacity style={styles.botao} onPress={habilitar}>
              <Text style={styles.textobotao}>{status ? 'Parar' : 'Começar'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={reset}>
              <Text style={styles.textobotao}>Zerar</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
};
 
const styles = StyleSheet.create({
  corpo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  cronometro: {
      fontSize: 48,
      fontWeight: 'bold',
      marginBottom: 20
  },
  containerbotoes: {
      flexDirection: 'row'
  },
  textobotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    fontWeight: 'bold'
  }
});
 
export default App;