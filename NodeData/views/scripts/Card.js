import {default as View} from './CardView.js';
const type_card = ['attack', 'heal', 'shield', 'money'  ];

export default function creat_rand_card(type = type_card[Math.floor(Math.random() * type_card.length)]) {
    switch (type) {
        case 'attack':
            return new Attack(10, 5);
        case 'heal':
            return new Heal(10, 5);
        case 'shield':
            return new Shield(10, 5);
        case 'money':
            return new Money(10);
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
class Attack extends Ability {
    constructor(attack, money) {
        super("Фаербол", '../image/fireball.png',
            'attack', money, attack);
    }
}

//лечение
class Heal extends Ability {
    constructor(heal, money) {
        super("Помощь с небес", '../image/aid.png',
            'heal', money, heal);
        this.heal = heal;
    }
}

//щит
class Shield extends Ability {
    constructor(shield, money) {
        super("Эгида", '../image/shield.png',
            'shield', money, shield);
        this.shield = shield;
    }
}

class Money extends Ability {
    constructor(money) {
        super("Чудный мешок", '../image/money.png',
            'money', money, null);
    }
}
export class Enemy extends Ability {
    constructor(enemy) {
        super(enemy.name, enemy.image,
            '', '', null);
    }
}