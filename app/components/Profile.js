'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import { StyleSheet, Text, View, Image } from 'react-native';

import userContainer from '../containers/userContainer';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user} = this.props;
    if (user.name) {
      return (
        <View style={styles.container}>
          <Image
            style={styles.profileImage}
            source={{
            uri: user.picture
          }}/>
          <Text style={styles.text}>{user.email}</Text>
          <Text style={styles.text}>{user.name}</Text>
        </View>
      )
    }
    return null;
  }
}

export default userContainer(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    marginTop: 100,
    width: 100,
    height: 100
  },
  text: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: '100'
  }
});
