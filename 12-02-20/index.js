(function () {
    let inputElm = document.getElementById('input');
    let buttonElm = document.getElementById('button');

    buttonElm.addEventListener('click', (event) => {
        if (!Number(inputElm.value)) {
            alert('Enter the number!');
            inputElm.value = '';
        } else {
            let inputResult = document.createElement('input');
            inputResult.type = 'text';
            inputResult.id = 'input2';
            inputResult.value = '0';
            inputResult.disabled = true;
            document.getElementById('form').appendChild(inputResult);

            for (let i = -inputElm.value; i <= inputElm.value; i++) {
                if (i !== 0) {
                    var buttonElm2 = document.createElement('input');
                    buttonElm2.type = 'button';
                    buttonElm2.className = 'buttonsArg';
                    buttonElm2.value = `${i}`;
                    buttonElm2.addEventListener('click', (event) => {
                        inputResult.value = (parseInt(inputResult.value) + i).toString();
                    });
                    document.getElementById('form').appendChild(buttonElm2);
                }
            }

            let buttonReset = document.createElement('input');
            buttonReset.type = 'reset';
            buttonReset.value = 'Reset';
            buttonReset.addEventListener('click', (event) => {
                inputResult.style.display = 'none';
                Array.prototype.forEach.call(document.getElementsByClassName('buttonsArg'), function(elm) {
                    elm.style.display = 'none';
                });
                buttonReset.style.display = 'none';
                inputElm.style.display = 'inline-block';
                inputElm.value = '';
                buttonElm.style.display = 'inline-block';
            });
            document.getElementById('form').appendChild(buttonReset);

            inputElm.style.display = 'none';
            buttonElm.style.display = 'none';

            inputResult.style.display = 'flex';
            inputResult.style.marginBottom = '10px';
            Array.prototype.forEach.call(document.getElementsByClassName('buttonsArg'), function(elm) {
                elm.style.display = 'inline-block';
                elm.style.marginBottom = '10px';
                elm.style.marginRight = '5px';
            });
            buttonReset.style.display = 'flex';
        }
    })
})();