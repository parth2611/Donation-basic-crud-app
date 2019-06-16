import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { Container, Header, Content, Form, Item, Input, Radio, Button, Picker } from "native-base";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import temp1 from '../images/temp1.jpg';
import AboutApp from './AboutApp';

export class Login extends Component {
    
  static navigationOptions = {
    header: null,
  };
    menuClick() {
     this.props.navigation.openDrawer();
    }

    render() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#FF7043'></StatusBar>


            <View style={styles.topBar}>
                <View style={styles.menuView}>
                    <TouchableOpacity style={styles.imgClick} onPress={this.menuClick.bind(this)}>
                        <Image style={styles.imgMenu} source={require('../assets/menu.png')} ></Image>
                    </TouchableOpacity>
                </View>
                <Text style={styles.txtBar}>Login Now</Text>
                <View style={styles.menuViewright}></View></View>

            

        <View style={styles.contentBar}>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              padding: 20,
              fontWeight: "bold",
              color: 'green'
            }}
          >Login To Access</Text>
         
      
          <Form>
            
            <Item>
              <Input placeholder="User Name" />
            </Item>
            <Item>
              <Input placeholder="Password" />
            </Item>

           
            <Item>
              <Button
                style={{ backgroundColor: "#FF7043" }}
                onPress={() =>
                  alert('Login Successfully')
                }
              >
                <Text style={{padding:20}}>Login</Text>
              </Button>
            </Item>
          </Form>
        </View>
        </View>
    );
    }
}

const MainNavigator = createStackNavigator({
  Login: Login,
  AboutApp: AboutApp
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  topBar: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FF5722"
  },

  leftHeader: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "flex-start"
  },

  rightHeader: {
    flex: 1,
    justifyContent: "flex-end"
  },

  txtBar: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16
  },

  contentBar: {
    flex: 1,
  
   
  },

  imgMenu: {
    width: 20,
    height: 20
  },

  imgClick: {
    width: 40,
    height: 40,
    justifyContent: "center"
  },

  imgHome: {
    width: 200,
    height: 200
  }
});
