import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity } from 'react-native'
import NGO from '../images/ngo.jpg';
import { Content, List, ListItem, Left, Icon, Body, Right, Button } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import DonationForm from './DonationForm';
export class Donate extends Component{
   
  static navigationOptions = {
    header: null,
  };

    menuClick() {
        this.props.navigation.openDrawer()
    }
    
    render(){
        return (
          <View style={styles.container}>
            <StatusBar backgroundColor="#FF7043" />

            <View style={styles.topBar}>
              <View style={styles.menuView}>
                <TouchableOpacity
                  style={styles.imgClick}
                  onPress={this.menuClick.bind(this)}
                >
                  <Image
                    style={styles.imgMenu}
                    source={require("../assets/menu.png")}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.txtBar}>Donate Now</Text>
              <View style={styles.menuViewright} />
            </View>

            <View style={styles.contentBar}>
              <List>
                <ScrollView>
                  <ListItem>
                    <Image source={NGO} />
                    <View style={{ marginLeft: 20 }}>
                      <Text style={{ fontSize: 16 }}>
                        Indian Rural Association
                      </Text>
                      <Button
                        style={{
                          backgroundColor: "#FF7043",
                          marginTop: 10
                        }}
                        onPress={() =>
                          this.props.navigation.navigate("DonationForm")
                        }
                      >
                        <Text style={{padding:20}}>Donate Now</Text>
                      </Button>
                    </View>
                  </ListItem>

                  <ListItem>
                    <Image source={NGO} />
                    <View style={{ marginLeft: 20 }}>
                      <Text style={{ fontSize: 16 }}>
                        Humanity Association
                      </Text>
                      <Button
                        style={{
                          backgroundColor: "#FF7043",
                          marginTop: 10
                        }}
                      >
                        <Text style={{ padding: 20 }}>Donate Now</Text>
                      </Button>
                    </View>
                  </ListItem>
                  <ListItem>
                    <Image source={NGO} />
                    <View style={{ marginLeft: 20 }}>
                      <Text style={{ fontSize: 16 }}>
                        Social Welfare Society
                      </Text>
                      <Button
                        style={{
                          backgroundColor: "#FF7043",
                          marginTop: 10
                        }}
                      >
                        <Text style={{ padding: 20 }}>Donate Now</Text>
                      </Button>
                    </View>
                  </ListItem>
                  <ListItem>
                    <Image source={NGO} />
                    <View style={{ marginLeft: 20 }}>
                      <Text style={{ fontSize: 16 }}> Rural AID</Text>
                      <Button
                        style={{
                          backgroundColor: "#FF7043",
                          marginTop: 10
                        }}
                      >
                        <Text style={{ padding: 20 }}>Donate Now</Text>
                      </Button>
                    </View>
                  </ListItem>
                  <ListItem>
                    <Image source={NGO} />
                    <View style={{ marginLeft: 20 }}>
                      <Text style={{ fontSize: 16 }}>Temp Name</Text>
                      <Button
                        style={{
                          backgroundColor: "#FF7043",
                          marginTop: 10
                        }}
                      >
                        <Text style={{ padding: 20 }}>Donate Now</Text>
                      </Button>
                    </View>
                  </ListItem>
                </ScrollView>
              </List>
            </View>
          </View>
        );
    };
}


const MainNavigator = createStackNavigator({
  Donate: { screen: Donate },
  DonationForm: { screen: DonationForm }
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    topBar: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FF5722',
    },


    leftHeader: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'flex-start',
    },


    rightHeader: {
        flex: 1,
        justifyContent: 'flex-end',
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
        height: 20,


    },


    imgClick: {
        width: 40,
        height: 40,
        justifyContent: 'center'
    },


    imgHome: {
        width: 200,
        height: 200
    },
})
