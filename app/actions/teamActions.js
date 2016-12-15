'use strict';
import { types } from './actionTypes';

export const actionCreators = {
  getTeam: (data) => {
    return { type: types.GET_TEAM, data: data };
  }
};
