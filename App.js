import React from 'react';
import BlocoCargo from './components/BlocoCargo';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.titulo}>Colinha Eleitoral</Text>
        </View>
        <ScrollView>
        <View style={styles.blockContainer}>
        <BlocoCargo cargo={'PRESIDENTE'} qtd={['1','2']} />
        <BlocoCargo cargo={'GOVERNADOR'} qtd={['1','2']} />
        <BlocoCargo cargo={'SENADOR 1'} qtd={['1','2','3']} />
        <BlocoCargo cargo={'SENADOR 2'} qtd={['1','2','3']} />
        <BlocoCargo cargo={'DEPUTADO ESTADUAL'} qtd={['1','2','3','4','5']} />
        <BlocoCargo cargo={'DEPUTADO FEDERAL'} qtd={['1','2','3','4']} />
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#191970',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',

  },
  titulo: {
    fontSize: 22,
    paddingTop: 25,
    paddingBottom: 5,
    color: '#fff',
  },


});
