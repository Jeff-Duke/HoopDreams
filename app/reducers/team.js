'use strict';
import { List } from 'immutable';
const teamData = (state = null, action) => {
  
  switch (action.type) {
    case 'FETCH_TEAM':
      const team = List.of(...action.team);
      return team;
    
    default: return state;
  }
};

export default teamData;
