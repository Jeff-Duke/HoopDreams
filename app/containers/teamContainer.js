'use strict';
import { connect } from 'react-redux';
import { actionCreators } from '../actions/teamActions';
const teams = [
  "Atlanta Hawks",
  "Boston Celtics",
  "Brooklyn Nets",
  "Charlotte Hornets",
  "Chicago Bulls",
  "Cleveland Cavaliers",
  "Dallas Mavericks",
  "Denver Nuggets",
  "Detroit Pistons",
  "Golden State Warriors",
  "Houston Rockets",
  "Indiana Pacers",
  "Los Angeles Clippers",
  "Los Angeles Lakers",
  "Memphis Grizzlies",
  "Miami Heat",
  "Milwaukee Bucks",
  "Minnesota Timberwolves",
  "New Orleans Pelicans",
  "New York Knicks",
  "Oklahoma City Thunder",
  "Orlando Magic",
  "Philadelphia 76ers",
  "Phoenix Suns",
  "Portland Trail Blazers",
  "Sacramento Kings",
  "San Antonio Spurs",
  "Toronto Raptors",
  "Utah Jazz",
  "Washington Wizards"
];

const mapStateToProps = (state) => {
  return { team: state.team, teams: teams };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTeam: (team) => {
       dispatch(actionCreators.getTeam(team));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
