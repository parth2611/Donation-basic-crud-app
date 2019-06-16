import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import NGO from "../images/ngo.jpg";
import {
  Content,
  List,
  ListItem,
  Left,
  Icon,
  Body,
  Right,
  Button,
  Form, Item, Input
} from "native-base";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

import { ScrollView } from "react-native-gesture-handler";
import { createStackNavigator, createAppContainer } from "react-navigation";


var method_props = [
    { label: "Cash", value: 0 }, 
    { label: "Cheque", value: 1 },
    
];

export default class DonationForm extends Component{
   
    static navigationOptions = {
        header: null,
    };

    menuClick() {
        this.props.navigation.openDrawer();
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
              <Text style={styles.txtBar}>Donation Form</Text>
              <View style={styles.menuViewright} />
            </View>

            <View style={styles.contentBar}>
              
              <Form>
                  <Item style={{alignItems:'center'}}>
                    <Image source={NGO} />
                  </Item>
                <Item>
                    <View>
                  <Text
                        style={{
                            fontSize: 18,
                            textAlign: "center",
                            padding: 20,
                            fontWeight: "bold",
                            color: 'green'
                        }}
                  >
                    NGO Name
                  </Text>
                <Text
                style={{
                    fontSize: 14,
                    textAlign: "center",
                    padding: 20,
                }}
                >
                    NGO Details
                </Text>
                            </View>
                </Item>

                <Item>
                  <Input placeholder="Name" />
                </Item>

                <Item>
                  <Input placeholder="Amount" />
                </Item>
                <Item>
                  <Text>Mode of Payment : </Text>

                  <RadioForm
                    style={{ marginRight: 20 }}
                    radio_props={method_props}
                    onPress={value => {}}
                    selectedButtonColor={"green"}
                    formHorizontal={true}
                    buttonWrapStyle={{ marginRight: 10 }}
                  />
                </Item>
                <Item>
                  <Button
                    style={{ backgroundColor: "#FF7043" }}
                    onPress={() => alert("Donated Successfully!!!")}
                  >
                    <Text style={{ padding: 10 }}>
                      Click Here to Donate
                    </Text>
                  </Button>
                </Item>
              </Form>
            </View>
          </View>
        );
    }
}

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
