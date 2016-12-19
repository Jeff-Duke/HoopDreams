'use strict';
const apiEndpoint = 'http://localhost:3001/1610612739/';

export const mapTeamToStore = (team) => {
  return {
    type: 'FETCH_TEAM',
    team
  };
};

export const fetchTeamDashboard = (TeamID) => {
  fetch(apiEndpoint+TeamID)
  .then(response => response.text())
  .then(responseText => dispatch(mapTeamToStore(responseText)))
  .catch(err => console.log('Error fetching team: ',err));
};

