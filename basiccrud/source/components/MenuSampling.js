import React , {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Content, List, ListItem, Left, Icon ,Body, Right } from 'native-base';


export default class MenuSampling extends Component{
    
    render(){
        return (
          <Content style={{ backgroundColor: "#fafafa" }}>
            <List>
              <ListItem onPress={() => alert("Hello")}>
                <Icon name="home" />
                <Body>
                  <Text>Connect One Application</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>About the Application</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Donate Now</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Ask For Help</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Join as a Volunteer</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Events</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Contact Us</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text>FAQ</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text>Login</Text>
                </Body>
              </ListItem>
            </List>
          </Content>
        );
    }
}



