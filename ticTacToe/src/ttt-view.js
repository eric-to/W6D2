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
        alert(`${this.game.currentPlayer} has won!`);
      }
    });
  }

  makeMove($square) {
    try {
      console.log($square.data());
      this.game.playMove($square.data().pos);
    }
    catch(err) {
      alert('Your move was invalid!');
    }
    let currPlayer = this.game.currentPlayer;
    console.log(typeof currPlayer);
    if (currPlayer === "o") {
      console.log(currPlayer);
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
