export default class Player {
    constructor(name) {
        this.name = name;
        this.lives = 100;
        this.money = 100;
        this.inventory = [];
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

    purchase(card) {
        if (this.money >= card.money) {
            this.money -= card.money;
            this.inventory.push(card);
            return true;
        }
        return false;
    }

    receiving(card) {
        this.inventory.push(card);
        return true;
    }

    income(card) {
        if (card.type !== 'money') {
            let del_card = this.inventory.indexOf(card);
            this.inventory.splice(del_card, -1);
        }
        this.money += card.money;
        return true;
    }

    game_over() {
        return "Game over";
    }
}
