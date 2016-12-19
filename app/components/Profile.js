'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  ScrollView,
  Switch,
  Animated,
  Picker,
  Item
} from 'react-native';

import userContainer from '../containers/userContainer';

class Profile extends Component{
  constructor (props) {
   super(props);
 }

 render() {
   const { user } = this.props;
   if (user.name) {
     console.log(user.picture);
     return (
       <View >
         <Image style={styles.profileImage}
           source={{uri: user.picture}}
         />
         <Text>{user.email}</Text>
         <Text>{user.name}</Text>
       </View>
     )
   }
   return null;
  }
}

export default userContainer(Profile);

const styles = StyleSheet.create({
  profileImage: {
    marginTop: 100,
    width: 50,
    height: 50
  },
  messageBox: {
    flex: 1,
    marginTop: 100,
  },
  avatar: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    top: 80,
  },
  form: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    top: 85,
    padding: 5,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  ebook: {
    top: 95,
    left: 15,
    marginBottom: 10,
  },
  orderByNewest: {
    top: 55,
    left: 150,
    marginBottom: 10,
  },
  eBookLabel: {
    top: 50,
    left: 15,
    marginBottom: 10,
    fontSize: 12,
  },
  newestLabel: {
    top: 25,
    left: 150,
    marginBottom: 10,
    fontSize: 12,
  },
  callApiButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#1E77E2',
    borderWidth: 2,
    margin: 10,
    shadowColor: '#1b71E2',
    shadowRadius: 10,
    borderRadius: 5,
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  apiButtonLabel: {
    fontSize: 24,
  },
});
