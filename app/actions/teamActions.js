'use strict';
import { types } from './actionTypes';
import axios from 'axios';
import path from 'path';
// const teamInfo = require(path.join(__dirname, '/data/teams');

export const actionCreators = {
  getTeam: (teamInfo) => {
    //do stuff
    .then(data => {
      return { type: types.GET_TEAM, data: data }
    })
    console.log(teamData);
    ;
  }
};
