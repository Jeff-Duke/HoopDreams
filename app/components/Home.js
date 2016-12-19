'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const teams = require('../../data/teams');

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

import teamContainer from '../containers/teamContainer';
import userContainer from '../containers/userContainer';
import Login from '../components/Login';

const apiEndpoint = 'http://localhost:3001/';

class Home extends Component{
  constructor (props) {
   super(props);
   this.state = {
     players: [],
     selectedTeam: 1610612739,
   };
 }
 
 fetchTeamDashboard() {
  const {mapTeamToStore} = this.props;
  fetch(apiEndpoint+this.state.selectedTeam)
    .then(response => response.text())
    .then(responseText => {
      mapTeamToStore(JSON.parse(responseText));
    })
    .then(() => {
      const teamData = this.props.teamData.toArray();
      this.setState({ teamData });
    })
    .catch(err => console.log('Error fetching team: ',err));
}

 render() {
   const { team, user } = this.props;
   if(user) {
     return (
       <View >
          <Picker
           style={styles.scrollView}
           selectedValue={this.state.selectedTeam}
           onValueChange={(team) => {
             this.setState({ selectedTeam: team })
           }}>
           {teams.map(function(team, i) {
             return <Picker.Item label={team.teamName} value={team.teamId} key={i} />
           })}
         </Picker>
         <TouchableHighlight onPress={() => this.fetchTeamDashboard()}>
          <Text>Set Team</Text>
        </TouchableHighlight>
       </View>
     )
   }
   else {
     return (
       <Login />
     )
   }
  }
}

export default userContainer(teamContainer(Home));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
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
