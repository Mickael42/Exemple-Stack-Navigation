import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen2 from './Screen2';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    fontFamily: "notoserif",
    fontSize: 16,
  },
});

class Home extends Component {
  static navigationOptions = {
    title: 'Tartiflette',
  
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
        onPress={()=> this.props.navigation.navigate('SecondScreen')}
          style={{ backgroundColor: 'green' }}>
          <Text>
            Lien vers le screen 2
        </Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const AppNavigator = createStackNavigator({
  PremierScreen: {
    screen: Home,
  },
  SecondScreen :{
    screen : Screen2
  } 

});

export default createAppContainer(AppNavigator);
