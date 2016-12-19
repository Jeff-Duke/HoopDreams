'use strict';
const apiEndpoint = 'http://localhost:3001/1610612739/';

export const mapTeamToStore = (team) => {
  return {
    type: 'FETCH_TEAM',
    team
  };
};



