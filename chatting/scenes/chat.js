import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
    Dimensions,
    KeyboardAvoidingView,
    TouchableHighlight,
    SegmentedControlIOS,
} from 'react-native';
import firebase from '../components/Firebase';

const {width, height} = Dimensions.get('window');

class chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            data: [],
            h: height
        };
    }

    componentWillMount() {
        this.getData();
    }


    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior='padding' //'padding'
                    style={styles.avoidContainer}>
                    <FlatList
                        data={this.state.data}
                        style={{height:height,}}
                        renderItem={({item}) => {
                            if (item[1] == global.userName) {
                                return (
                                    <View style={{width: width, }}>
                                        <Text style={{textAlign: "right",}}> {item[0]} </Text>
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View style={{ width: width, marginBottom: 5,}}>
                                        <Text style={{textAlign: "left"}}> {item[1]}: {item[0]} </Text>
                                    </View>
                                )
                            }
                        }
                        }
                    />
                    <View style={{flexDirection: "row",}}>
                        <TextInput
                            style={styles.textInput}
                            value={this.state.text}
                            onChangeText={(chatText) => {
                                this.setState({text: chatText})
                            }}
                        />

                        <Button
                            title="입력"
                            onPress={() => this.input_data(this.state.text, global.userName)}
                        />
                    </View>
                </KeyboardAvoidingView>

            </View>


        );
    }

    input_data(chatText, name) {
        let inputData = [chatText, name]
        let road = `users/${Date.now()}`;
        this.setState({text: ""})
        return firebase.database().ref(road).set(inputData).then(this.getData())

    }

    async getDataOnce(ref) {
        return await firebase.database().ref(ref).orderByKey().once('value', (chatdata) => {
            return chatdata
        })
    }

    async getData() {
        let ref = `users`
        return this.getDataOnce(ref).then((data) => {
            let items = []
            if (data.val()) {
                const obj = data.val()
                const keys = Object.keys(obj).sort()
                for (let i = 0, item; item = obj[keys[i]]; i++) {
                    items.push(item)
                }
            }
            this.setState({data: items})
        })
    }
}

const styles = StyleSheet.create({
    avoidContainer: {

        flex:1,
        paddingTop: 20,
        width:width,
        backgroundColor:'#F5FCFF',
        alignSelf:"stretch",
    },

    container: {
        flex: 1,

        height:height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textInput: {
        width:width-50,
        borderRadius: 5,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 10,
    },
});

export default chat;
