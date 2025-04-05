import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

// Dados fictícios para exibir como uma lista (podem ser posts, produtos, etc.)
const dados = [
  { id: '1', title: 'Post 1', description: 'Descrição do post 1' },
  { id: '2', title: 'Post 2', description: 'Descrição do post 2' },
  { id: '3', title: 'Post 3', description: 'Descrição do post 3' },
  { id: '4', title: 'Post 4', description: 'Descrição do post 4' },
  { id: '5', title: 'Post 5', description: 'Descrição do post 5' },
  // Adicione mais itens conforme necessário
];

export default function Home() {
  const renderItem = ({ item }) => (
    <View style={estilo.card}>
      <Text style={estilo.cardTitle}>{item.title}</Text>
      <Text style={estilo.cardDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={estilo.container}>
      {/* FlatList para exibir os dados */}
      <FlatList
        data={dados}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={estilo.listContainer}
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
  listContainer: {
    paddingBottom: 20, // Adiciona um espaço extra no final da lista
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
    elevation: 4, // Sombra mais forte no Android
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
});
