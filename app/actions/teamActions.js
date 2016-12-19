'use strict';

export const mapTeamToStore = (team) => {
  return {
    type: 'FETCH_TEAM',
    team
  };
};



