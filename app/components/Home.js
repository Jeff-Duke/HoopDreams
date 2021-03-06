'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';

const teams = require('../../data/teams');

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Picker,
  Item
} from 'react-native';

import teamContainer from '../containers/teamContainer';
import userContainer from '../containers/userContainer';
import Login from './Login';
import Team from './Team';
import Dimensions from 'Dimensions';

const apiEndpoint = 'http://localhost:3001/';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeam: 1610612739,
      updating: null
    };
  }

  fetchTeamDashboard() {
    this.setState({updating: true});
    const {mapTeamToStore} = this.props;
    fetch(apiEndpoint + this.state.selectedTeam)
      .then(response => response.text())
      .then(responseText => {
        mapTeamToStore(JSON.parse(responseText));
        this.setState({updating: false});
      })
      .catch(err => console.log('Error fetching team: ', err));
  }

  render() {
    const {user} = this.props;
    if (user) {
      return (
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../MJlogowhitebackground.jpeg')}/>
          <Text style={styles.text}>Select a team:</Text>
          <Picker
            selectedValue={this.state.selectedTeam}
            onValueChange={(team) => {
            this.setState({selectedTeam: team});
          }}>
            {teams
              .map(function (team, i) {
                return <Picker.Item label={team.teamName} value={team.teamId} key={i}/>
              })}
          </Picker>
          <TouchableHighlight
            style={styles.submitButton}
            underlayColor='#949494'
            onPress={() => {
            this.fetchTeamDashboard();
            this.props.navigator.push({component: Team, title: "Show charts"});
          }}>
            <Text>Submit</Text>
          </TouchableHighlight>
        </View>
      )
    } else {
      return (<Login/>)
    }
  }
}

export default userContainer(teamContainer(Home));

const styles = StyleSheet.create({
  submitButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '100'
  },
  logo: {
    width: Dimensions
      .get('window')
      .width,
    resizeMode: Image.resizeMode.contain,
    marginBottom: -75
  }
});
