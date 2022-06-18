import creat_rand_card from "./Card.js";

class SetCardsView {
    constructor(name, number) {
        this.modal = document.getElementById('set-cards');
        this.modal.style.display = 'flex';
        this.name = this.modal.querySelector('.name-game');
        this.set_cards = this.modal.querySelector('.set-cards');
        this.number = 0;
        this.max_number = 0;
        this.updateData(name, number);
    }
}

SetCardsView.prototype.updateData = function (name, number) {
    this.name.textContent = name;
    this.max_number = number;
}

const add_cards = function (set_cards, player) {
    for (let number_two = 0; number_two < 2; number_two++) {
        let card = creat_rand_card();
        card.view.card.addEventListener('click', function () {
            document.getElementById('set-cards').querySelector('.set-cards').innerHTML = '';
                player.receiving(card);
            set_cards.number += 1;
            if (set_cards.number < set_cards.max_number) {
                add_cards(set_cards, player);
            } else {
                document.getElementById('set-cards').style.display = 'none';
            }
        })
        card.view.putInSet(set_cards.set_cards);
    }
}

export {SetCardsView, add_cards};