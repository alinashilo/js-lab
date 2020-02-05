function makeObject(str) {
    let obj = {};
    for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        obj[char] = obj[char] + 1 || 1;
    }
    return obj;
}

function isAnagram(str1, str2) {
    let obj1 = makeObject(str1);
    console.log(obj1);
    let obj2 = makeObject(str2);
    console.log(obj2);

    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        console.log('Not anagrams');
        return false;
    }

    for(let char in obj1) {
        if(obj1[char] !== obj2[char]) {
            console.log('Not anagrams');
            return false;
        }
    }
    console.log('Anagrams!');
    return true;
}

isAnagram('top', 'pot'); //Anagrams!
isAnagram('t  po', 'top'); //Anagrams!
isAnagram('t  po', 'topp'); //Not anagrams

///////////////////////////////////////////////////////////////////////////////////

function fibonacci(n) {
    let arr = [0, 1];

    let prevNum1;
    let prevNum2;
    for (let i = 2; i < n; i++) {
        prevNum1 = arr[i-2];
        prevNum2 = arr[i-1];
        arr.push(prevNum1 + prevNum2);
    }
    console.log(arr[n-1]);
}

fibonacci(10); //34

///////////////////////////////////////////////////////////////////////////////////

function sum(n) {
    let arr = [];
    let a = 0;
    for (let i = 0; i < n; i++) {
        arr.push(++a);
    }

    let total = 0;

    for (let i = 0; i < n; i++) {
        total += arr[i].toString().split('').reduce((acc, curr) => {
            return Number(acc) + Number(curr);
        }, 0);
    }

    console.log(total);
}

sum(500); //5505
sum(123); //1038
