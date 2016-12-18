'use strict';
import { types } from './actionTypes';

export const actionCreators = {
  getTeam: (teamInfo) => {
    .then(data => {
      return { type: types.GET_TEAM, data: data }
    });
  }
};
