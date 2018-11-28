function HanoiView(game, towers) {
  this.game = game;
  this.el = towers;
  
  this.setupTowers();
}

HanoiView.prototype.setupTowers = function () {
  for (let i = 0; i < 3; i++) {
    this.el.append($('<ul>'));
    
  }
  
  const firstTower = $('ul')[0];
  for (let i = 0; i < 3; i++) {
    let disc = $('<li>');
    disc.data("size", i);
    $(firstTower).append(disc);
    disc.addClass('discs');
    
    if ((i + 1).toString() === '1') {
      disc.addClass("one");  
    } else if ((i + 1).toString() === '2') {
      disc.addClass("two");  
    } else {
      disc.addClass("three");  
    }
  }
};



module.exports = HanoiView;

// 
// for(let i=0; i<3; i++){
//   const $discs = $('<li>')
//   this.el.append($discs);