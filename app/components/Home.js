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

import { Pie } from 'react-native-pathjs-charts';

const apiEndpoint = 'http://localhost:3001/';

class Home extends Component{
  constructor (props) {
   super(props);
   this.state = {
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
    .catch(err => console.log('Error fetching team: ',err));
}

 render() {
   const { user } = this.props;
   let teamData;
   if (!!this.props.teamData) { 
     teamData = this.props.teamData.toArray();

     console.log('team data!!', teamData);
  }
   let options = {
      margin: {
        top: 20,
        left: 10,
        right: 20,
        bottom: 20
      },
      width: 350,
      height: 350,
      color: '#FFEBCD',
      r: 50,
      R: 150,
      legendPosition: 'topLeft',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        color: '#ECF0F1'
      }
    };


   if(user) {
     return (
       <View >
          <Picker
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
        {!!teamData ? 
        <View style={styles.charts}>
          <Text>Offensive Rebounds by Player</Text>
          <Pie
            data={teamData}
            options={options}
            accessorKey="oreb" />
          <Text>Defensive rebounds by Player</Text>
          <Pie
            data={teamData}
            options={options}
            accessorKey="dreb" />
          <Text>Win Percentage</Text>
          <Pie
            data={teamData}
            options={options}
            accessorKey="wPct" />
      </View>
          : f => f
        }
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
  charts: {
    flexDirection: 'column',
  }
});
