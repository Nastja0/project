const CardView = function() {
    function CardView() {
        this.card = createFromTemplate('cardTemplate');
        this.card_back = createFromTemplate('cardTemplateBack');
        this.name = this.card.querySelector('.cardName');
        this.image = this.card.querySelector('.cardImage img');
        this.descriptions = this.card.querySelector('.cardDescriptions');

        this.card.addEventListener('click', this.signalChoose);
    }

    CardView.prototype.putInSet = function(deck, width = 8) {
        let width_new = document.documentElement.clientWidth / width;
        let height_new = width_new / 2 * 3;
        let putInEvent = new CustomEvent('putInEvent');
        //elem.dispatchEvent(putInEvent);
        this.card.style.height = `${height_new}px`;
        this.card.style.width = `${width_new}px`;
        this.card.querySelector('.cardImage img').style.height = `${width_new * 3 / 4}px`;
        this.card.querySelector('.cardImage img').style.width = `${width_new * 3 / 4}px`;
        this.card.querySelector('.descriptions').style.fontSize = `${width_new /10}px`;
        this.card.querySelector('.money').style.fontSize = `${width_new /10}px`;
        this.card.querySelector('.cardName').style.fontSize = `${width_new /8}px`;
        deck.appendChild(this.card);
    };

    CardView.prototype.putInSetBack = function(deck, width = 8) {
        let width_new = document.documentElement.clientWidth / width;
        let height_new = width_new / 2 * 3;
        this.card_back.style.height = `${height_new}px`;
        this.card_back.style.width = `${width_new}px`;
        deck.appendChild(this.card_back);
    };

    CardView.prototype.updateData = function ({name, image, descriptions, money}) {
        this.name.textContent = name;
        this.image.setAttribute('src', `${image}`);

        this.descriptions.querySelector('.descriptions').textContent = descriptions;
        this.descriptions.querySelector('.money div').textContent = money;
    };

    function createFromTemplate(id) {
        const cardTemplate = document.getElementById(id);
        return cardTemplate.cloneNode(true);
    }

    return CardView;
}();

export default CardView;