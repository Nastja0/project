class Card{
    constructor(name, image, type, image_type) {
        this.name = name;
        this.image = image;

        this.type = type;
        this.image_type = image_type;
    }
}

class Ability extends Card {
    getDescriptions() {
        return [getCreatureDescription(this), ...super.getDescriptions()];
    }
}

//атака
class Attack extends Creature {
    constructor(name = "", image = '',
                type ='attack', image_type='',
                attack) {
        super(name, image, type, image_type);
        this.attack = attack;
    }
}
//лечение
class Heal extends Creature {
    constructor(name = "", image = '',
                type ='heal', image_type='',
                heal) {
        super(name, image, type, image_type);
        this.heal = heal;
    }
}

class Shield extends Creature {
    constructor(name = "", image = '',
                type ='heal', image_type='',
                sield) {
        super(name, image, type, image_type);
        this.sield = sield;
    }
}

class Money extends Creature {
    constructor(name = "", image = '',
                type ='heal', image_type='',
                monet) {
        super(name, image, type, image_type);
        this.monet = monet;
    }
}