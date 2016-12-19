'use strict';
import { connect } from 'react-redux';
import { fetchTeamDashboard } from '../actions/teamActions';

const mapStateToProps = (state) => {
  return { team: state.team };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeamDashboard: (teamID) => {
       dispatch(fetchTeamDashboard(teamID));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
