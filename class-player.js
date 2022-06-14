type="module";

class Player {
    constructor(name) {
        this.name = name;
        this.lives = 100;
        this.money = 100;
    }

    damage(lives) {
        if (this.lives >= lives) {
            this.lives -= lives;
            return true;
        }
        return this.game_over();
    }

    heal(lives) {
        this.lives += lives;
        return true;
    }

    purchase(money) {
        if (this.money < money) {
            this.money -= money;
            return true;
        }
        return false;
    }

    income(money) {
        this.money += money;
        return true;
    }

    game_over() {
        return "Game over";
    }
}

let player;