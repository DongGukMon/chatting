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

class gps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialPosition: 'why!',
        };
    }

    componentWillMount(){
        alert("why");
        navigator.geolocation.getCurrentPosition( (position) =>{
            var initialPosition = JSON.stringify(position);
            this.setState({initialPosition});
        });
    }

    render() {
        return (
            <View>
                <Text>
                    <Text style={styles.title}>Initial position: </Text>
                    {this.state.initialPosition}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: '500',
    },

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

export default gps;
