import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, AsyncStorage } from 'react-native';

export default class InputNumber extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }; 

  async componentDidMount(){
    const value = await AsyncStorage.getItem(`@Colinha2018:${this.props.name}${this.props.number}`) || ''
    this.setState({value})
  }

  _getValue = async (value) => {
    this.setState({value})
    await AsyncStorage.setItem(`@Colinha2018:${this.props.name}${this.props.number}`,value)
  }

  render() {
    return (
        <TextInput 
        style={styles.inputNum} 
        maxLength={1} 
        keyboardType={'numeric'} 
        onChangeText={(value) => {
        this._getValue(value)
        }} 
        value={this.state.value}
        />
    );
  }
}

const styles = StyleSheet.create({

  inputNum: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    width: 35,
    height: 35,
    marginLeft: 3,
    fontSize: 25,
  },
});