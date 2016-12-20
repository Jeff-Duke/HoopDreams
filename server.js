'use strict';
const nba = require('nba');
const express = require('express');
var app = express();
const teamInfo = require('./data/teams');

app.set('port', process.env.PORT || 3001);
app.use(express.static('public'));

app.listen(app.get('port'), () => {
  console.log(`listening on ${app.get('port')}`);
});

app.get('/:TeamID', function(req, res) {
  teamPlayerDashboard(req.params.TeamID)
  .then((response) => {
    console.log(response.teamOverall);
    let result = [];
    response.playersSeasonTotals.map((player) => {
      let obj = {};
      const { playerName, wPct, playerId, pts, oreb, dreb, ast, stl, blk, tov } = player;
      Object.assign(obj, { name: playerName, wPct, playerId, pts, oreb, dreb, ast, stl, blk, tov });
      result.push(obj);
    });
    res.send(result);
  })
  .catch(err => console.log(err));
});

const teamPlayerDashboard = (TeamID = "1610612737", SeasonType = "Regular Season", Season = "2016-17") => {
  return nba.stats.teamPlayerDashboard({ Season, SeasonType, TeamID });
};
