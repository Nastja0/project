import {default as View} from './CardView.js';
import {player} from "./start.js";
const type_card = ['attack', 'heal', 'shield', 'money'  ];

export default function creat_rand_card(type = type_card[Math.floor(Math.random() * type_card.length)]) {
    switch (type) {
        case 'attack':
            let stat1 = randomize(attackValue)
            return new Attack(stat1[0], stat1[1]);
        case 'heal':
            let stat2 = randomize(heelValue)
            return new Heal(stat2[0], stat2[1]);
        case 'shield':
            let stat3 = randomize(shieldValue)
            return new Shield(stat3[0], stat3[1]);
        case 'money':
            return new Money(Math.floor(Math.random()*15) + 5);
    }
}

class Card {
    constructor(name, image, type, money, descriptions) {
        this.name = name;
        this.image = image;
        this.type = type;
        this.money = money;
        this.descriptions = descriptions;

        this.view = new View();
        this.updateView();

        this.event = function () {
        };
    }
}

Card.prototype.updateView = function () {
    this.view.updateData({
        name: this.name,
        descriptions: this.descriptions,
        image: this.image,
        money: this.money
    });
};

class Ability extends Card {
}

//атака
export class Attack extends Ability {
    constructor(attack=10, money=3) {
        super("Фаербол", '../image/fireball.png',
            'attack', money, attack);
        this.attack = attack;
    }
}

//лечение
export class Heal extends Ability {
    constructor(heal=15, money=3) {
        super("Помощь с небес", '../image/aid.png',
            'heal', money, heal);
        this.heal = heal;
    }
}

//щит
export class Shield extends Ability {
    constructor(shield=30,lifetime = 3, money=3) {
        super("Эгида", '../image/shield.png',
            'shield', money, shield);
        this.shield = shield;
        this.shieldLifeTime=lifetime;
    }
}

export class Money extends Ability {
    constructor(money) {
        super("Чудный мешок", '../image/money.png',
            'money', money, null);
    }
}

let attackValue = {
    15: 3,
    25: 5,
    35: 7,
    40: 9
};
let shieldValue = {
    20: 4,
    30: 6,
    40: 8,
    45: 9
};
let heelValue = {
    15: 4,
    25: 7,
    35: 9,
    40: 11
};

let randomize = function (obj) {
    let keys = Object.keys(obj);
    let key = keys[ keys.length * Math.random() << 0];
    return [Number(key), Number(obj[key])];
};
