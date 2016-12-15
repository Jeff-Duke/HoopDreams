'use strict';
import * as types from '../actions/actionTypes';

const initialState = [];

const team = (state = initialState, action) => {
  const { type, data } = action;
  switch(type) {
    case 'GET_TEAM':
      return data;
  }
  return state;
};

export default team;
