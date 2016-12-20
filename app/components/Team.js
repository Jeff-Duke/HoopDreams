'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';

const teams = require('../../data/teams');

import {StyleSheet, Text, View, ScrollView} from 'react-native';

import teamContainer from '../containers/teamContainer';
import userContainer from '../containers/userContainer';
import Login from './Login';

import chartOptions from '../../data/chartOptions.js';

import { Pie } from 'react-native-pathjs-charts';

const apiEndpoint = 'http://localhost:3001/';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeam: 1610612739,
      updating: null
    };
  }

  render() {
    const { pieOptions } = chartOptions
    const {user} = this.props;
    let teamData;
    if (!!this.props.teamData) {
      teamData = this.props.teamData.toArray();
    }

    if (user) {
      return (
        <View style={styles.container}>
          {!!teamData && !this.state.updating
            ? <ScrollView style={styles.charts}>

                <Text style={styles.text}>Total Points by Player</Text>
                <Pie data={teamData} options={pieOptions} accessorKey="pts"/>

                <Text style={styles.text}>Total assists by Player</Text>
                <Pie data={teamData} options={pieOptions} accessorKey="ast"/>

                <Text style={styles.text}>Total Rebounds by Player</Text>
                <Pie data={teamData} options={pieOptions} accessorKey="reb"/>

              </ScrollView>
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
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '100'
  }
});
