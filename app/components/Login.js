import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

import userContainer from '../containers/userContainer';
import Auth0Lock from 'react-native-lock';

var credentials = require('../../auth0-credentials');
var lock = new Auth0Lock(credentials);

import Home from '../components/Home';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Text style={styles.title}>Hoop Dreams</Text>
        </View>
        <TouchableHighlight
          style={styles.signInButton}
          underlayColor='#949494'
          onPress={this._onLogin.bind(this)}>
          <Text>Log In</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _onLogin() {
    const {getUser} = this.props

    lock.show({}, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      getUser(profile)
      this
        .props
        .navigator
        .push({component: Home, title: "Pick a team"})
    })
  }
}

export default userContainer(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    fontWeight: '100',
    textAlign: 'center'
  },
  signInButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
