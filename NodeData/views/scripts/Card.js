class Card{
    constructor(name, image, type) {
        this.name = name;
        this.image = image;

        this.type = type;
    }
}

class Ability extends Card {
    getDescriptions() {
        return [getCreatureDescription(this), ...super.getDescriptions()];
    }
}

//атака
class Attack extends Ability {
    constructor(name = "Фаербол", image = '../image/fireball.png',
                type ='attack',
                attack) {
        super(name, image, type);
        this.attack = attack;
    }
}

//лечение
class Heal extends Ability {
    constructor(name = "Помощь с небес", image = '../image/aid.png',
                type ='heal',
                heal) {
        super(name, image, type);
        this.heal = heal;
    }
}
//щит
class Shield extends Ability {
    constructor(name = "Эгида", image = '',
                type ='heal',
                sield) {
        super(name, image, type);
        this.sield = sield;
    }
}

class Money extends Ability {
    constructor(name = "", image = '',
                type ='heal', image_type='',
                monet) {
        super(name, image, type, image_type);
        this.monet = monet;
    }
}