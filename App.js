import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      {/* Logo (substitua o require pelo caminho da sua imagem) */}
      <Image
        source={require('./img/logo-cofre.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TextInput
        placeholder="e-mail"
        placeholderTextColor="#888"
        style={styles.input}
      />

      <TextInput
        placeholder="senha"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Não possui conta? <Text style={styles.signupLink}>Cadastre-se</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4E6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1.5,
    borderBottomColor: '#D16A75',
    marginBottom: 30,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#D16A75',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupText: {
    marginTop: 30,
    fontSize: 14,
    color: '#666',
  },
  signupLink: {
    color: '#F781A5',
    fontWeight: 'bold',
  },
});
