import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StatusBar,
  ToolbarAndroid,
  DeviceEventEmitter,
  StyleSheet, TouchableOpacity
} from "react-native";
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import {  List, Body, ListItem, Left } from 'native-base';
import temp1 from '../images//temp1.jpg';
import donate from '../images/donate.png';

import  Donate  from './Donate';
import  askForHelp  from './askForHelp';
import Login from './Login';
import AboutApp from './AboutApp';
import JoinAsVolunteer from './JoinAsVolunteer';
import {SplashScreen} from './SplashScreen';

export class Dashboard extends Component {
 
 

    menuClick() {
        this.props.navigation.openDrawer()
    }

    render() {
      
        return (
          // <Drawer
          //     ref={(ref) => {this._drawer = ref;}}
          //     content = {<SideBar navigator = {this._navigator}/>}
          //     onClose = {() => this.closeDrawer()}
          // >

          //   <View>
          //     <StatusBar backgroundColor='#16a085' animated={true}/>
          //     <Toolbar title="Connect One" color={getColor('#1abc9c')} />

          //     <Button
          //         onPress= {() => this.openDrawer()}
          //         title="Menu"
          //         style={{backgroundColor:'#1abc9c'}}
          //     />
          //     <Image
          //         source = {temp1}
          //     />
          //     <List style={{padding:10}} >
          //         <ListItem
          //             onPress={() => this.props.navigation.navigate('Donate')}
          //         >
          //             <Left>
          //               <Image
          //                 source={donate}
          //                 style={{height:50, width:50}}
          //               />
          //             </Left>
          //             <Body>
          //                 <Text>Donate Now!!!</Text>
          //             </Body>
          //         </ListItem>

          //                 <ListItem
          //                     onPress={() => this.props.navigation.navigate('Donate')}
          //                 >
          //                     <Left>
          //                         <Image
          //                             source={donate}
          //                             style={{ height: 50, width: 50 }}
          //                         />
          //                     </Left>
          //                     <Body>
          //                         <Text>Join As a Volunteer</Text>
          //                     </Body>
          //                 </ListItem>

          //                 <ListItem onPress={() => { alert('Help') }}>
          //                     <Left>
          //                         <Image
          //                             source={donate}
          //                             style={{ height: 50, width: 50 }}
          //                         />
          //                     </Left>
          //                     <Body>
          //                         <Text>Ask For Help</Text>
          //                     </Body>
          //                 </ListItem>
          //     </List>

          //   </View>
          // </Drawer>

          <View style={styles.container}>
            <StatusBar backgroundColor="#FF7043" />
            <View style={styles.topBar}>
              <View style={styles.leftHeader}>
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
              <Text style={styles.txtBar}>Dashboard</Text>
              <View style={styles.rightHeader} />
            </View>
            <View style={styles.contentBar}>
              <Image source={temp1} />
              <List>
                <ListItem
                  onPress={() =>
                    this.props.navigation.navigate("Donate")
                  }
                >
                 
                    <Image
                      source={donate}
                      style={{ height: 50, width: 50 }}
                    />
                  
                  <Body>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: "center",
                        padding: 20,
                        fontWeight: "bold",
                        color: "green"
                      }}
                    >
                      Donate Now!!!
                    </Text>
                  </Body>
                </ListItem>

                <ListItem
                  onPress={() =>
                    this.props.navigation.navigate("JoinAsVolunteer")
                  }
                >
                  
                    <Image
                      source={donate}
                      style={{ height: 50, width: 50 }}
                    />
                  
                  <Body>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: "center",
                        padding: 20,
                        fontWeight: "bold",
                        color: "green"
                      }}
                    >
                      Join As a Volunteer
                    </Text>
                  </Body>
                </ListItem>

                <ListItem
                  onPress={() =>
                    this.props.navigation.navigate("AskForHelp")
                  }
                >
                 
                    <Image
                      source={donate}
                      style={{ height: 50, width: 50 }}
                    />
                
                  <Body>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: "center",
                        padding: 20,
                        fontWeight: "bold",
                        color: 'green'

                      }}>Ask For Help</Text>
                  </Body>
                </ListItem>
              </List>
            </View>
          </View>
        );
    }
}

// export default class App extends Component {
//     render() {
//         return (
//             <Stack />
//         );
//     }
// }

// const AppStackNavigator = createStackNavigator({
//     Dashboard: Dashboard,
//     Donate: Donate,
//     askForHelp: askForHelp,
//     Login: Login
// });

// const Stack = createAppContainer(AppStackNavigator);

export default class App extends Component {
    render() {
        return (
            <MyAppdrawer />
        );
    }
}

const MyDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard
  },
  AboutApp: {
    screen: AboutApp
  },
  Donate: {
    screen: Donate
  },
  AskForHelp: {
    screen: askForHelp
  },
  Login: {
    screen: Login
  },
  JoinAsVolunteer: {
    screen: JoinAsVolunteer
  }
});


const MyAppdrawer = createAppContainer(MyDrawerNavigator);



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
        fontWeight:'bold',
        fontSize:16
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
