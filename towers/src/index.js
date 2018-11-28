const HanoiGame = require('./game.js');
const HanoiView = require('./hanoi-view.js');

$( () => {
  const rootEl = $('.towers');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});

console.log("HELLO CONSOLE!");