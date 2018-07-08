// Enemies our player must avoid

class Enemy {
  constructor(x, y) {
    // The image/sprite for our enemies, this uses
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x < 505) {
      this.x += (1 * dt);
    } else {
      this.x = -90;
    }
  }
  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}


class Player {
  constructor() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 420;
  }
  update() {
    // If the player reaches the water
    if (player.y < 20) {
      score++;
      document.getElementById('player-score').innerHTML = score;

      this.reset();
    }
  }
  reset() {
    this.x = 200;
    this.y = 420;
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(direction) {
    if (direction === 'left' && this.x > 50) {
      this.x -= 100;
    }
    if (direction === 'right' && this.x < 400) {
      this.x += 100;
    }
    if (direction === 'up' && this.y > 3) {
      this.y -= 100;
    }
    if (direction === 'down' && this.y < 400) {
      this.y += 100;
    }
  }
}
// Place the player object in a variable called player
var player = new Player();

//Instantiate 3 enemies,
let FirstEnemy = new Enemy(-90, 60);
let secondEnemy = new Enemy(-90, 145);
let thirdEnemy = new Enemy(-90, 230);

// Place all enemy objects in an array called allEnemies
let allEnemies = [FirstEnemy, secondEnemy, thirdEnemy];


// This listens for key presses and sends the keys to your
document.addEventListener('keyup', e => {
  let allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
