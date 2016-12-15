'use strict';
const nba = require('nba');
const express = require('express');
var app = express();
const teamInfo = require('./data/teams');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));

app.listen(app.get('port'), () => {
  console.log(`listening on ${app.get('port')}`);
});

const teamPlayerDashboard = (TeamID = "1610612737", SeasonType = "Regular Season", Season = "2016-17") => {
  nba.stats.teamPlayerDashboard({
    Season,
    SeasonType,
    TeamID
  })
    .then((response) => {
      let result = [];
      response.playersSeasonTotals.map((player) => {
        let obj = {};
        const { playerName, wPct, playerId, pts, oreb, dreb, ast, stl, blk, tov } = player;
        Object.assign(obj, { playerName, wPct, playerId, pts, oreb, dreb, ast, stl, blk, tov });
        result.push(obj);
      });
    })
    .catch(err => console.log(err));
};

teamPlayerDashboard();
