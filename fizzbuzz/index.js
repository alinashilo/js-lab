function generateFizzBuzz() {
    let n = Number(prompt('Enter the number:', ''));
    if (!n) {
        alert('The value is not valid. Please, enter the number');
    } else {
        let arr = [], arr2 = [];
        for (let i = 1; i <= n; i++) {
            arr.push(i);
        }

        arr2 = arr.reduce((acc, curr) => {
            if (curr % 15 === 0) {
                arr2.push(acc = 'fizzbuzz');
            } else if (curr % 3 === 0) {
                arr2.push(acc = 'fizz');
            } else if (curr % 5 === 0) {
                arr2.push(acc = 'buzz');
            } else {
                arr2.push(acc = curr);
            }
            return arr2;
        }, []);

        document.getElementById('result').innerHTML = 'Your list:';
        let ul = document.createElement('ul');

        for (let i = 0; i < n; i++) {
            let li = document.createElement('li');
            li.textContent = arr2[i];
            ul.appendChild(li);
        }
        document.getElementById('result').appendChild(ul);
    }
}
