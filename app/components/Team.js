'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import path from 'path'

const teams = require('../../data/teams');

import {StyleSheet, Text, View, ScrollView} from 'react-native';

import teamContainer from '../containers/teamContainer';
import userContainer from '../containers/userContainer';
import Login from './Login';

import chartOptions from '../../data/chartOptions.js';

import { Pie, Radar } from 'react-native-pathjs-charts';

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
    const { pieOptions, radarOptions } = chartOptions
    const {user} = this.props;
    let teamData;
    if (!!this.props.teamData) {
      teamData = this.props.teamData.toArray();
    }

  //   let data = [{
  //   "speed": 74,
  //   "balance": 29,
  //   "explosives": 40,
  //   "energy": 40,
  //   "flexibility": 30,
  //   "agility": 25,
  //   "endurance": 44
  //   },
  //   {
  //   "speed": 80,
  //   "balance": 12,
  //   "explosives": 60,
  //   "energy": 20,
  //   "flexibility": 15,
  //   "agility": 12,
  //   "endurance": 90
  // }];

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
