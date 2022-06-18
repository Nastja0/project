export default class Enemy {
    constructor(name, img) {
        this.name = name;
        this.lives = 100;
        this.money = 0;
        this.inventory = [];
        this.image = img;
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
