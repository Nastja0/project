import {default as View} from './CardView.js';

const type_card = ['attack', 'heal', 'shield', 'money'];

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
    constructor(name, image, type, money) {
        this.name = name;
        this.image = image;

        this.type = type;
        this.money = money;

        this.view = new View();
        this.updateView();
    }
}

Card.prototype.updateView = function () {
    this.view.updateData({
        name: this.name,
        descriptions: this.type,
        image: this.image,
        money:this.money
    });
};

class Ability extends Card {
}

//атака
class Attack extends Ability {
    constructor(attack, money) {
        super("Фаербол", '../image/fireball.png',
            'attack', money);
        this.attack = attack;
    }
}

//лечение
class Heal extends Ability {
    constructor(heal, money) {
        super("Помощь с небес", '../image/aid.png',
            'heal', money);
        this.heal = heal;
    }
}

//щит
class Shield extends Ability {
    constructor(shield, money) {
        super("Эгида", '../image/shield.png',
            'shield', money);
        this.shield = shield;
    }
}

class Money extends Ability {
    constructor(money) {
        super("Чудный мешок", '../image/money2.png',
            'money', money);
    }
}