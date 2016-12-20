'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';

const teams = require('../../data/teams');

import {StyleSheet, Text, View, ScrollView} from 'react-native';

import teamContainer from '../containers/teamContainer';
import userContainer from '../containers/userContainer';
import Login from './Login';

import {Pie} from 'react-native-pathjs-charts';

const apiEndpoint = 'http://localhost:3001/';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeam: 1610612739,
      updating: null
    };
  }

  componentDidMount() {
    this.fetchTeamDashboard();
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
    let teamData;
    if (!!this.props.teamData) {
      teamData = this.props.teamData.toArray();
    }
    let pieOptions = {
      margin: {
        top: 20,
        left: 10,
        right: 20,
        bottom: 20
      },
      width: 350,
      height: 350,
      color: '#d7001e',
      r: 50,
      R: 150,
      legendPosition: 'top',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 10,
        fontWeight: true,
        color: '#ECF0F1'
      },
      submitButton: {
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: '#D9DADF',
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      }
    };

    if (user) {
      return (
        <View style={styles.container}>
          {!!teamData && !this.state.updating
            ? <ScrollView style={styles.charts}>
                <Text>Offensive Rebounds by Player</Text>
                <Pie data={teamData} options={pieOptions} accessorKey="oreb"/>

                <Text>Defensive rebounds by Player</Text>
                <Pie data={teamData} options={pieOptions} accessorKey="dreb"/>

                <Text>Win Percentage</Text>
                <Pie data={teamData} options={pieOptions} accessorKey="wPct"/>

              </ScrollView>
            : f => f
}
          {!!this.state.updating
            ? <Text>Fetching New Data...</Text>
            : f => f
}
        </View>
      )
    } else {
      return (<Login/>)
    }
  }
}

export default userContainer(teamContainer(Team));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  charts: {
    marginTop: 50,
    padding: 20
  }
});
