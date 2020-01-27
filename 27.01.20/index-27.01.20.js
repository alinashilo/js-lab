function isPalindrome() {
    let str = prompt('Введите слово для проверки на палиндромность:');
    str = str.toLowerCase();
    if(!str) {
        console.log('Введите слово!');
    } else if (str === str.split('').reverse().join('')) {
        console.log('Слово является палиндромом');
    } else {
        console.log('Слово не является палиндромом');
    }
}

isPalindrome();

/////////////////////////////////////////////////////////////////////////////////

function uniqueArray() {
    let arr = [];
    arr.length = 7;
    let item;
    for (let i = 0; i < arr.length; i++) {
        item = Math.floor(Math.random() * 11);
        if (!arr.includes(item)) {
            arr[i] = item;
        } else i--;
    }
    console.log(arr);
    console.log(arr.sort(function (a, b) {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
    }));
}

uniqueArray();

/////////////////////////////////////////////////////////////////////////////////

function replaceInArray() {
    let arr = [];
    arr.length = 10;
    let item;
    for (let i = 0; i < arr.length; i++) {
        item = Math.floor(Math.random() * 101);
        if (!arr.includes(item)) {
            arr[i] = item;
        } else i--;
    }

    arr = arr.join(', ').replace(/0/g, 'zero').split(', ');

    console.log(arr);
}

replaceInArray();