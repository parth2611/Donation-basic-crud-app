import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Image,  Button} from 'react-native';

export default class App extends Component{

  render() {
    return (
      <View>
        <Text>
          App.js File
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
