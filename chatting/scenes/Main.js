import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Button from "../components/madeButton";
import {Actions, Reducer, Router, Scene} from "react-native-router-flux";
import firebase from '../components/Firebase';

global.userName ="";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }

        render(){
            return (
                <View style={{flex: 1,}}>
                    <Button
                        title="geolocation"
                        style={{backgroundColor: "#380"}}
                        onClick={Actions.gps}/>

                    <Button
                        title="입장"
                        style={{backgroundColor: "#380"}}
                        onClick={Actions.chat}/>

                    <Text>이름을 입력해주세요.</Text>
                    <TextInput
                        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
                        value={this.state.text}
                        onChangeText={(userName) => {
                            this.setState({text: userName}),
                            global.userName = userName;}}
                    />

                </View>
            )
        }

}
export default Main;
