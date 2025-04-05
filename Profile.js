import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const userProfile = {
  name: 'Pedrinho Matador de porco',
  bio: "i'm a dwarf and i'm diggin a hole",
};

export default function Profile() {
  return (
    <View style={estilo.container}>

<Image //ajuda do Miguel
        style={estilo.profileImage}
        source={require('./assets/dreadnought.jpg')}
      />
      
      <Text style={estilo.name}>{userProfile.name}</Text>
      
      <Text style={estilo.bio}>{userProfile.bio}</Text>

      <Text style={estilo.titulo}>Este é seu perfil!</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Para deixar a imagem redonda
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  titulo: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    textAlign: 'center',
  },
});
