import {Attack,Shield,Heal} from "./Card.js";

export default function CreateEnemy(enemyName){
    switch (enemyName) {
        case 'demonGigler':
            return new DemonGigler();
        case 'demonMonkey':
            return new DemonMonkey();
        case 'demonSalamandra':
            return new DemonSalamandra();
        case 'gigler':
            return new Gigler();
        case 'salamandra':
            return new Salamandra();
        case 'woodlouse':
            return new WoodLouse();
    }
}

class Enemy {
    constructor(name, img) {
        this.name = name;
        this.image = img;
        this.lives = 100;
        this.money = 0;
        this.shield = 0;
        this.shieldLifeTime = 0;
        this.inventory = [];
        this.changing_lives();
    }

    //получение урона
    damage(lives) {
        if(this.shieldLifeTime !== 0)
            this.defence(lives);
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

    defence(damage){
        let delta = this.shield - damage;
        if(delta > 0){
            this.shield -=damage;
            this.shieldLifeTime-=1;
        }
        else{
            this.shield = 0;
            this.shieldLifeTime=0;
            this.damage(-delta);
        }
    }

    pickUpShild(shield,lifetime){
        this.shield = shield;
        this.shieldLifeTime = lifetime;
    }
    //обновление жизней
    changing_lives() {
        document.getElementById('player').querySelector('.lives').value = this.lives;
    }
    game_over() {
        return "Game over";
    }
}


class DemonGigler extends Enemy{
    constructor() {
        super('demonGigler','../image/demonGigler.png');
        this.inventory = [
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Shield(25),
            new Heal(15),
            new Heal(15),
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Shield(25),
            new Heal(15),
            new Heal(15),
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Attack(15),
            new Shield(25),
            new Heal(15),
            new Heal(15)
        ];
        this.lives = 80;
        this.money = 50;
    }
}
class DemonMonkey extends Enemy{
    constructor() {
        super('demonMonkey','../image/demonMonkey.png');
        this.inventory = [
            new Attack(15),
            new Attack(18),
            new Attack(15),
            new Attack(20),
            new Attack(15),
            new Attack(18),
            new Attack(15),
            new Attack(20),
            new Attack(15),
            new Attack(18),
            new Attack(15),
            new Attack(20),
            new Attack(15),
            new Attack(18),
            new Attack(15),
            new Attack(20),
            new Attack(15),
            new Attack(18),
            new Attack(15),
            new Attack(20),
            new Attack(15),
            new Attack(18),
            new Attack(15),
            new Attack(20)
        ];
        this.money = 45;
    }
}
class DemonSalamandra extends Enemy{
    constructor() {
        super('demonSalamandra','../image/demonSalamandra.png');
        this.inventory = [
            new Shield(10),
            new Attack(20),
            new Attack(18),
            new Attack(22),
            new Heal(15),
            new Shield(10),
            new Attack(20),
            new Attack(18),
            new Attack(22),
            new Heal(15),
            new Shield(10),
            new Attack(20),
            new Attack(18),
            new Attack(22),
            new Heal(15),
            new Shield(10),
            new Attack(20),
            new Attack(18),
            new Attack(22),
            new Heal(15),
            new Shield(10),new Attack(20),
            new Attack(18),
            new Attack(22),
            new Heal(15),
        ];
    }
}
class Gigler extends Enemy{
    constructor() {
        super('gigler','../image/gigler.png');
        this.inventory = [
            new Attack(12),
            new Attack(12),
            new Attack(12),
            new Heal(15),
            new Attack(12),
            new Attack(12),
            new Attack(12),
            new Heal(15),
            new Attack(12),
            new Attack(12),
            new Attack(12),
            new Heal(15)
        ];
        this.lives = 80;
        this.money = 35;
    }
}
class Salamandra extends Enemy{
    constructor() {
        super('salamandra','../image/salamandra.png');
        this.lives = 70;
        this.inventory = [
            new Attack(10),

        ];
        this.money = 30;
    }
}
class WoodLouse extends Enemy{
    constructor() {
        super('woodlouse','../image/woodlouse.png');
        this.inventory = [
            new Shield(20),
            new Attack(10),
            new Attack(15),
            new Attack(12),
            new Shield(20),
            new Attack(10),
            new Attack(15),
            new Attack(12),
            new Shield(20),
            new Attack(10),
            new Attack(15),
            new Attack(12),
            new Shield(20),
            new Attack(10),
            new Attack(15),
            new Attack(12),
            new Shield(20),
            new Attack(10),
            new Attack(15),
            new Attack(12),
            new Shield(20)
        ];
        this.money = 40;
        this.lives = 60;
    }
}

