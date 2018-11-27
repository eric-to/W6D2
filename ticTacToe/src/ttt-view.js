class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
  }

  bindEvents() {
    $('.cell').on("click", (e) => {
      let $cell = $(e.currentTarget);
      this.makeMove($cell);
      if (this.game.isOver()) {
        let winner = this.game.winner();
        winner = winner === 'x' ? 'o' : 'x';
        console.log(winner);
        const $playerWin = $('<h3>');
        if (winner) {
          $playerWin.text(`${winner} has won!`);
        } else {
          $playerWin.text("It\'s a tie!");
        }
        this.el.append($playerWin).css("font-size", "26px");
      }
    });
  }

  makeMove($square) {
    try {
      this.game.playMove($square.data().pos);
    }
    catch(err) {
      alert('Your move was invalid!');
    }
    let currPlayer = this.game.currentPlayer;
    if (currPlayer === "o") {
      $square.text(currPlayer).css('color', 'red');
    } else {
      $square.text(currPlayer).css('color', 'blue');
    }
    $square.removeClass('gray');
    $square.addClass('white');
  }

  setupBoard() {
    let $grid = $('<ul>');
    $grid.addClass('grid');
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $cell = $('<li>');
        $cell.data('pos', [i, j]);
        $grid.append($cell);
        $cell.addClass('cell');
        $cell.addClass('gray');
      }
    }
    // for (let i = 0; i < 9; i++) {
    //   let $cell = $('<li>');
    //   $grid.append($cell);
    //   $cell.addClass('cell');
    // }
    this.el.append($grid);
    this.bindEvents();
  }
}

module.exports = View;
