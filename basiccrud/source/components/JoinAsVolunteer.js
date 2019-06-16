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
import { Container, Header, Content, Form, Item, Input, Radio, Button, Picker } from "native-base";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { ScrollView } from 'react-native-gesture-handler';


var radio_props = [
  { label: "Your Self", value: 0 },
  { label: "On Behalf", value: 1 }
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
export default class JoinAsVolunteer extends Component {
   
    menuClick() {
    this.props.navigation.openDrawer();
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
          <Text style={styles.txtBar}>Join As a Volunteer </Text>
          <View style={styles.menuViewright} />
        </View>
        <ScrollView>
          <View style={styles.contentBar}>
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                padding: 20,
                fontWeight: "bold",
                color: "green"
              }}
            >
              Join Us As a Volunteer!!!
            </Text>
            <Text
              style={{
                textAlign: "center"
              }}
            >
              Show your ability and skills to society {"\n"}and do a social
              cause for society
            </Text>

            <Form style={{ marginTop: 10 }}>
              {/* <Item>
                        <RadioForm
                            style={{ padding: 10, marginLeft: 10 }}
                            radio_props={radio_props}
                            onPress={value => { }}
                            selectedButtonColor={"#FF7043"}
                            formHorizontal={true}
                            buttonWrapStyle={{ marginLeft: 10 }}
                        />
                    </Item> */}
              <Item>
                <Input placeholder="Full Name" />
              </Item>
              <Item>
                <Input placeholder="Address" />
              </Item>

              <Item>
                <Picker
                  mode="dropdown"
                  style={{ width: undefined, padding: 5 }}
                  placeholder="Select City"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                >
                  <Picker.Item label="Ahmedabad" value="key0" />
                  <Picker.Item label="Rajkot" value="key1" />
                  <Picker.Item label="Surat" value="key2" />
                  <Picker.Item label="Vadodara" value="key3" />
                </Picker>

                <Picker
                  mode="dropdown"
                  style={{ width: undefined, padding: 5 }}
                  placeholder="Select City"
                  placeholderStyle={{ color: "#bfc6ea" }}
                >
                  <Picker.Item label="Gujrat" value="key0" />
                  <Picker.Item label="Maharashtra" value="key1" />
                  <Picker.Item label="Rajasthan" value="key2" />
                  <Picker.Item label="Delhi" value="key3" />
                </Picker>
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
                <Input placeholder="Contact Number" />
              </Item>

              <Item>
                <Input placeholder="Email" />
              </Item>

              <Item>
                <Input placeholder="Age" />
              </Item>
              <Item>
                <Input placeholder="Qualification" />
              </Item>
              <Item>
                <Input placeholder="Password" />
              </Item>
              <Item>
                <Input placeholder="Confirm Password" />
              </Item>

              <Item style={{ paddingBottom: 10 }}>
                <Button
                  style={{ backgroundColor: "#FF7043" }}
                  onPress={() => {
                    alert("Registration SuccessFully!!!");
                  }}
                >
                  <Text style={{ padding: 15 }}>Register</Text>
                </Button>
              </Item>
            </Form>
          </View>
        </ScrollView>
      </View>
    );
    }
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
