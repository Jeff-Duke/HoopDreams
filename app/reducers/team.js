'use strict';

const team = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TEAM':
    return state.concat(action.team);
  }
  return state;
};

export default team;
