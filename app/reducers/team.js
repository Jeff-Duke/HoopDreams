'use strict';

const team = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TEAM':
      const newState = [];
      return newState.concat(action.team);
    
    default: return state;
  }
};

export default team;
