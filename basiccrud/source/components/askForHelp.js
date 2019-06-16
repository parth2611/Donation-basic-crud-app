import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Container, Header, Content, Form, Item, Input, Radio, Button } from "native-base";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { ScrollView } from 'react-native-gesture-handler';

var radio_props = [
    { label: 'Your Self', value: 0 },
    { label: 'On Behalf', value: 1 }
];

var gender_props = [
    { label: 'Male', value: 0 },
    { label: 'Female', value: 1 }
];

var occ_props = [
    { label: 'Student', value: 0 },
    { label: 'HouseWife', value: 1 },
    { label: 'Employee', value: 2 },
    { label: 'Self Employed', value: 3 },
    { label: 'Other', value: 4 },
    
];

export default class Donate extends Component {
    

 
    menuClick() {
        this.props.navigation.openDrawer()
    }

    render() {
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
              <Text style={styles.txtBar}>Ask For Help</Text>
              <View style={styles.menuViewright} />
            </View>

            <View style={styles.contentBar}>
              <ScrollView>
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: "center",
                    padding: 20,
                    fontWeight: "bold",
                    color: "green"
                  }}
                >
                  Ask For HELP!!!
                </Text>

                <Text
                  style={{
                    textAlign: "center"
                  }}
                >
                  Service to others is the rent you pay for your room on
                  this earth
                </Text>

                <Form>
                  <Item>
                    <RadioForm
                      style={{ marginLeft: 20, marginTop: 15 }}
                      radio_props={radio_props}
                      onPress={value => {}}
                      selectedButtonColor={"green"}
                      formHorizontal={true}
                      buttonWrapStyle={{ marginRight: 10 }}
                    />
                  </Item>
                  <Item>
                    <Input placeholder="First Name" />
                  </Item>
                  <Item>
                    <Input placeholder="Last Name" />
                  </Item>
                  <Item>
                    <Text>Gender : </Text>

                    <RadioForm
                      style={{ padding: 10, marginLeft: 10 }}
                      radio_props={gender_props}
                      onPress={value => {}}
                      selectedButtonColor={"green"}
                      formHorizontal={true}
                      buttonWrapStyle={{ marginLeft: 10 }}
                    />
                  </Item>
                  <Item>
                    <Input placeholder="Email" />
                  </Item>

                  <Item>
                    <Input placeholder="Age" />
                  </Item>
                  <Item>
                    <Input placeholder="Address" />
                  </Item>

                  <Item>
                    <Text>Are you??</Text>

                    <RadioForm
                      style={{ padding: 10, marginLeft: 10 }}
                      radio_props={occ_props}
                      onPress={value => {}}
                      selectedButtonColor={"green"}
                      buttonWrapStyle={{ marginLeft: 10 }}
                    />
                  </Item>
                  <Item>
                    <Button
                      style={{ backgroundColor: "#FF7043" }}
                      onPress={() => {
                        alert("Submitted SuccessFully!!!");
                      }}
                    >
                      <Text>Submit!!!</Text>
                    </Button>
                  </Item>
                </Form>
              </ScrollView>
            </View>
          </View>
        );
    };
}


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
