let temp = 'Это строка';
alert (temp);
temp = temp.replace(temp, 'И тут тоже строка');
console.log(temp);

/////////////////////////////////////////////////////////////

let user = {
    name: 'Alina',
    years: 21,
    women: true,
    id: null,
    interests: ['cycling', 'photography']
};

for (let key in user) {
    alert(key + ': ' + user[key]);
}
console.table(user);

/////////////////////////////////////////////////////////////

let age = prompt('Сколько Вам лет?');
alert(`Поздравляем, Вам ${age} полных лет!`);
if (age >= 18) {
    alert('Пользователь совершеннолетний.');
} else {
    alert('Пользователь несовершеннолетний.');
}