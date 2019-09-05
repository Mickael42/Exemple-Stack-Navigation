import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        fontFamily: "notoserif",
        fontSize: 16,
    },


});

class Screen2 extends Component {
    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={{ backgroundColor: 'cyan' }}>
                    <Text>
                        Lien vers le screen 1
        </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

export default Screen2;

