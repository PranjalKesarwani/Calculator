console.log('This is calculator');

let screen = document.getElementById('screen');

let inputBtn = document.getElementsByClassName('inputBtn');  //yaha document.querySelectorAll('.inputBtn') bhi kr skte the
let screenValue = '';

for (let item of inputBtn) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }


        else if (buttonText == 'C') {
            screenValue = '';
            screen.value = screenValue;

        }

        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            // screenValue = screen.value; //yaha line 34 and 35 me yahi dono problems aa rhi. i want after clicking on equal if i click any number then previous value of screenValue should be clear but if i click any calculating symbol like sum then previous value should not be cleard
            // screenValue = '';
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

        // if(buttonText == '2' || buttonText ==  '3' || buttonText == '4'){
        //     console.log('Or condition is working properly')
        // }
        // let a = 8;
        // let b = 2;
        // console.log(a/b);

    })
}

    // screen.value += buttonText;
        // if (buttonText == '+') {

        //     let num1 = screen.value;
        //     screen.value += '+'


        //     console.log(num1);
        // }
        // else if (buttonText != '+') {
        //     screen.value += buttonText;

        // }










