/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    FlatList,

} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {buttonPressed: 0};
        this.handleButtonPress = this.handleButtonPress.bind(this);
    }

    handleButtonPress() {
        this.setState({buttonPressed: this.state.buttonPressed + 1});

    }
    render() {
        return (
            <View style={styles.container}>
                <Text testID={"welcome"} style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text testID={"runningState"} style={styles.instructions}>
                    {this.state.buttonPressed.toString()}
                </Text>
                {/*<Button onPress={(this.handleButtonPress)  title={"Start"} testID={"startButton"}}/>*/}
                <Button onPress={() => this.handleButtonPress()} title={"Start"} testID={"startButton"}/>
                <TextInput testID={"input"} style={styles.input} />
                <View style={styles.listContainer}>
                <FlatList
                    testID={"list"}
                    data={["One","Two","three","four","Five"]}
                    renderItem={({ item }) => <Text style={styles.listItem} > {item}</Text>} />
                </View>
                </View>
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
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    input:{
        width:"80%",
        height: 40,
        borderWidth:1,
        padding: 10
    },
    listContainer: {
        height: 100,
        width: "80%",
        backgroundColor: '#eee'
    },
    listItem: {
        height: 100
    }
});
