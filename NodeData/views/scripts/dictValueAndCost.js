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
    return [key, obj[key]];
};
