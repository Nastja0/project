export default class Player {
    constructor(name) {
        this.name = name;
        this.lives = 100;
        this.money = 0;
        this.inventory = [];
        this.changing_money();
        this.changing_lives();
    }

    //получение урона
    damage(lives) {
        if (this.lives >= lives) {
            this.lives -= lives;
            this.changing_lives();
            return true;
        }
        return this.game_over();
    }

    //лечение
    heal(lives) {
        this.lives += lives;
        this.changing_lives();
        return true;
    }

    //покупка карты
    purchase(card) {
        if (this.money >= card.money) {
            this.money -= card.money;
            this.changing_money();
            this.inventory.push(card);
            return true;
        }
        return false;
    }

    //получение карты
    receiving(card) {
        if (card.type === 'money') {
            this.money += card.money;
            this.changing_money();
        } else {
            this.inventory.push(card);
        }
        return true;
    }

    //продажа карты
    income(card) {
        let del_card = this.inventory.indexOf(card);
        this.inventory.splice(del_card, -1);
        this.money += card.money;
        return true;
    }

    //конец игры
    game_over() {
        return "Game over";
    }

    //обновление жизней
    changing_lives() {
        document.getElementById('player').querySelector('.lives').value = this.lives;
    }

    //обновление денег
    changing_money() {
        document.getElementById('player').querySelector('.count-money').textContent = this.money;
    }
}
