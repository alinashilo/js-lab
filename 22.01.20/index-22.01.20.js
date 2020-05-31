let users = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Cooper',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 25
    }
];

let userLastName = prompt('Введите фамилию пользователя:');

for (let i = 0; i < users.length; i++) {
    var result;
    if (users[i].lastName.toUpperCase() === userLastName.toUpperCase()) {
        result = Object.assign({}, users[i]);
        console.log(result);
        alert('user name: ' + result.firstName + ' ' + result.lastName + '\n' + 'user age: ' + result.age);
    }
}

if (result === undefined) {
    alert('No results found for your request');
}
