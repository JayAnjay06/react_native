import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity 
  } from 'react-native';

class HomePage extends Component {
  handleLogout = () => {
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to Your App</Text>
        <Text style={styles.message}>You are now logged in!</Text>
        <TouchableOpacity style={styles.button} onPress={this.handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomePage;
