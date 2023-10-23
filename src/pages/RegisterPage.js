import React, { Component } from 'react';
import { 
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity 
  } from 'react-native';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleRegister = () => {
    const { username, email, password } = this.state;
    alert('Registrasi berhasil');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <TouchableOpacity style={styles.registerButton} onPress={this.LoginPage}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  registerButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default RegisterPage;
