import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, AsyncStorage } from 'react-native';
import InputNumber from './InputNumber'

export default class BlocoCargo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''    
    }};

    async componentDidMount(){
      const name = await AsyncStorage.getItem(`@Colinha2018:${this.props.cargo}`) || ''
      this.setState({name})
    }
  
    _getValue = async (name) => {
      this.setState({name})
      await AsyncStorage.setItem(`@Colinha2018:${this.props.cargo}`,name)
    }

  render() {
    return (
        <View style={styles.bloco}>
        <Text style={styles.cargo}>{this.props.cargo}</Text>
        <View style={styles.numeros}>
        {this.props.qtd.map(u => <InputNumber key={u} number={u} name={this.props.cargo}/>)}
        </View>
        <TextInput 
        style={styles.name} 
        placeholder={'Nome do Candidato'} 
        onChangeText={(name) => {
        this._getValue(name)
        }}> 
        {this.state.name}
        </TextInput>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  cargo:{
    color: '#191970',
  },
  bloco:{
    margin: 5,
    padding: 5,
    borderRadius: 4,
    //borderWidth: 0.5,
    //backgroundColor: '#d3d3d3',
  },
  numeros:{
    flexDirection: 'row'
  },
  name:{
    flex: 1,
    margin: 5,
    fontSize: 18,
    paddingBottom: 4
  }
});