import React, { useState } from 'react';  // CORRETO!
import { Text, View, StyleSheet, FlatList, TextInput } from 'react-native';

// Dados fictícios para simular a lista de playlists ou itens
const dados = [
  { id: '1', title: 'Playlist 1', description: 'Descrição da playlist 1' },
  { id: '2', title: 'Playlist 2', description: 'Descrição da playlist 2' },
  { id: '3', title: 'Playlist 3', description: 'Descrição da playlist 3' },
  { id: '4', title: 'Playlist 4', description: 'Descrição da playlist 4' },
  { id: '5', title: 'Playlist 5', description: 'Descrição da playlist 5' },
  // Adicione mais itens conforme necessário
];

export default function Playlist() {
  const [searchQuery, setSearchQuery] = useState('');

  // Função para filtrar a lista de dados com base na busca
  const filteredData = dados.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={estilo.card}>
      <Text style={estilo.cardTitle}>{item.title}</Text>
      <Text style={estilo.cardDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={estilo.container}>
      {/* Barra de pesquisa */}
      <TextInput
        style={estilo.searchBar}
        placeholder="Buscar playlists..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      {/* Título */}
      <Text style={estilo.titulo}>
        Sua Playlist Ideal para Você
      </Text>

      {/* Exibição dos resultados filtrados */}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={estilo.listContainer}
        ListEmptyComponent={<Text style={estilo.noResults}>Nenhum resultado encontrado</Text>}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  titulo: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 8,
  },
  noResults: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777',
    marginTop: 20,
  },
});
