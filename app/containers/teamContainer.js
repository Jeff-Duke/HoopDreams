'use strict';
import { connect } from 'react-redux';
import { actionCreators } from '../actions/teamActions';

const mapStateToProps = (state) => {
  return { team: state.team };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTeam: (team) => {
       dispatch(actionCreators.getTeam(team));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
