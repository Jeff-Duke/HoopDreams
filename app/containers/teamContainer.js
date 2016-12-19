'use strict';
import { connect } from 'react-redux';
import { mapTeamToStore } from '../actions/teamActions';

const mapStateToProps = (state) => {
  return { teamData: state.team };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mapTeamToStore: (team) => {
       dispatch(mapTeamToStore(team));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
