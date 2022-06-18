const CardView = function() {
    function CardView() {
        this.card = createFromTemplate('cardTemplate');
        this.card_back = createFromTemplate('cardTemplateBack');
        this.name = this.card.querySelector('.cardName');
        this.image = this.card.querySelector('.cardImage img');
        this.descriptions = this.card.querySelector('.cardDescriptions');

        this.card.addEventListener('click', this.signalChoose);
    }

    CardView.prototype.putInSet = function(deck, width = 200, height = 300) {
        this.card.style.height = `${height}px`;
        this.card.style.width = `${width}px`;
        this.card.querySelector('.cardImage img').style.height = `${width * 3 / 4}px`;
        this.card.querySelector('.cardImage img').style.width = `${width * 3 / 4}px`;
        deck.appendChild(this.card);
    };

    CardView.prototype.putInSetBack = function(deck, width = 200, height = 300) {
        this.card_back.style.height = `${height}px`;
        this.card_back.style.width = `${width}px`;
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