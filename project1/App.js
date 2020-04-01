import React from 'react';
import { StyleSheet, Platform, TextInput, Button, Text, View } from 'react-native';


export default class App extends React.Component {
  getInitialState() {
    return {
      start: 0,
      break: 0
    };
  }

  runTime = () => {

  }

  valueStartChange = () => {

  }


  render() {
    return (
      <View>
        <View style={[styles.statusBarBackground]}>
        </View>
        <Text style={{ textAlign: 'center', }}>Work Timer</Text>
        <View style={styles.container}>
          <Text>0:00</Text>
        </View>
        <View>
          <Button title="Start" />
          <Button title="Reset" onPress={this.valueStartChange} />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }} title="20" >
          <TextInput
            style={{ height: 20, borderColor: 'gray', borderWidth: 1, width: 250 }} value={this.value}
          />
          <TextInput
            style={{ height: 20, borderColor: 'gray', borderWidth: 1, width: 250 }}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: "20px",
  },
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 280 : 0,
    backgroundColor: "white",
  }
});
