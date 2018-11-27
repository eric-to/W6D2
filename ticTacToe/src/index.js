const View = require('./ttt-view.js');
const Game = require('../../solution/game.js');

  $(() => {
    const game = new Game();
    const $rootEl = $('.ttt');
    const gameView = new View(game, $rootEl);
    
  });
