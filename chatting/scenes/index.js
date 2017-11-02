import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Main from "./Main";
import Chat from "./chat";
import Gps from "./gps";
import {Actions, Reducer, Router, Scene} from "react-native-router-flux";

export default class index extends Component {

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="main"
                        component={Main}
                        initial={true}
                        hideNavBar={true}
                    />

                    <Scene
                    key ="chat"
                    component={Chat}
                    hideNavBar={true}
                    />

                    <Scene
                        key ="gps"
                        component={Gps}
                        hideNavBar={true}
                    />

                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        color: '#333333',
        marginBottom: 5,
    },
});

