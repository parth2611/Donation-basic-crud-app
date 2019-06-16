import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity } from 'react-native'

export default class SignUp extends Component {

    menuClick() {
        this.props.navigation.openDrawer()
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
                    <Text style={styles.txtBar}>SignUp Now</Text>
                    <View style={styles.menuViewright}></View></View>


                <View style={styles.contentBar}>
                    <Text>SignUp Screen</Text>
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
