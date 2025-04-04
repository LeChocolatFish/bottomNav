import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Config(){
    return(
        <View style={estilo.container}>
            <Text style={estilo.titulo}>
                Configurações
            </Text>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        backgroundColor: '#ffffff',
        padding:10,
    },
    titulo:{
        margin: 20,
        fontSize:20,
        textAlign:'center'
    }
});