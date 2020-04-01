import React from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';


export default class App extends React.Component {
  getInitialState() {
    return {
      start: 0,
      break: 0
    };
  }

  runTime = () => {
    if (start) {

    }
  }

  valueStartChange = () => {

  }

  render() {
    return (
      <View>
        <Text style={{ textAlign: 'center', }}>Work Timer</Text>
        <View style={styles.container}>
          <Text>0:00</Text>
        </View>
        <View>
          <Button title="Start" />
          <Button title="Reset" onPress={this.valueStartChange} />
        </View>
        <TextInput
          style={{ height: 20, borderColor: 'gray', borderWidth: 1 }} value={this.value}
        />
        <TextInput
          style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
        />
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
});
