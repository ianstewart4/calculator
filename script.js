// Displays the current and previous number in the calculator screen.

const current = document.querySelector('.current');
const previous = document.querySelector('.previous');

// NUMBERS
// Selectors

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')

// Event listeners

one.addEventListener('click', addone)
two.addEventListener('click', addtwo)
three.addEventListener('click', addthree)
four.addEventListener('click', addfour)
five.addEventListener('click', addfive)
six.addEventListener('click', addsix)
seven.addEventListener('click', addseven)
eight.addEventListener('click', addeight)
nine.addEventListener('click', addnine)
zero.addEventListener('click', addzero)

// OPERATORS
// Selectors

const point = document.querySelector('.point')
const del = document.querySelector('.del')
const neg = document.querySelector('.neg')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const equal = document.querySelector('.equal');
const ac = document.querySelector('.ac');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');

// Operator event listeners

point.addEventListener('click', addpoint)
del.addEventListener('click', numDel)
neg.addEventListener('click', toNeg)
multiply.addEventListener('click', multiplyNum)
divide.addEventListener('click', divideNum)
minus.addEventListener('click', minusNum)
plus.addEventListener('click', plusNum)
equal.addEventListener('click', equalNum)
ac.addEventListener('click', clearAll)

function addone() {
    if (current.innerHTML.indexOf(' ') != -1) {
        current.innerHTML = '1';
        previous.innerHTML = '';
    } else {
        current.innerHTML += '1';
    }
}

function addtwo() {
    if (current.innerHTML.indexOf(' ') != -1) {
        current.innerHTML = '2';
        previous.innerHTML = '';
    } else {
        current.innerHTML += '2';
    }
}

function addthree() {
    if (current.innerHTML.indexOf(' ') != -1) {
        current.innerHTML = '3';
        previous.innerHTML = '';
    } else {
        current.innerHTML += '3';
    }
}

function addfour() {
    if (current.innerHTML.indexOf(' ') != -1) {
        current.innerHTML = '4';
        previous.innerHTML = '';
    } else {
        current.innerHTML += '4';
    }
}

function addfive() {
    if (current.innerHTML.indexOf(' ') != -1) {
        current.innerHTML = '5';
        previous.innerHTML = '';
    } else {
        current.innerHTML += '5';
    }
}

function addsix() {
    if (current.innerHTML.indexOf(' ') != -1) {
        current.innerHTML = '6';
        previous.innerHTML = '';
    } else {
        current.innerHTML += '6';
    }
}

function addseven() {
    if (current.innerHTML.indexOf(' ') != -1) {
        current.innerHTML = '7';
        previous.innerHTML = '';
    } else {
        current.innerHTML += '7';
    }
}

function addeight() {
    if (current.innerHTML.indexOf(' ') != -1) {
        current.innerHTML = '8';
        previous.innerHTML = '';
    } else {
        current.innerHTML += '8';
    }
}

function addnine() {
    if (current.innerHTML.indexOf(' ') != -1) {
        current.innerHTML = '9';
        previous.innerHTML = '';
    } else {
        current.innerHTML += '9';
    }
}

function addzero() {
    if (current.innerHTML.indexOf(' ') != -1) {
        current.innerHTML = '0';
        previous.innerHTML = '';
    } else {
        current.innerHTML += '0';
    }
}

function addpoint() {
    if (current.innerHTML.indexOf('.') == -1) {
        current.innerHTML += '.';
    }
}

function numDel() {
    current.innerHTML = current.innerHTML.slice(0, -1);
}

function toNeg() {
    if (current.innerHTML.charAt(0) != '-') {
        current.innerHTML = '-' + current.innerHTML;
    } else {
        current.innerHTML = current.innerHTML.slice(1);
    };
}

function multiplyNum() {
    previous.innerHTML += current.innerHTML + '*';
    current.innerHTML = '';
}

function divideNum() {
    previous.innerHTML += current.innerHTML + '/';
    current.innerHTML = '';
}

function minusNum() {
    previous.innerHTML += current.innerHTML + '-';
    current.innerHTML = '';
}

function plusNum() {
    previous.innerHTML += current.innerHTML + '+';
    current.innerHTML = '';
}

function equalNum() {
    if (current.innerHTML.indexOf(' ') != -1) {

    } else {
        previous.innerHTML += current.innerHTML;
        current.innerHTML = eval(previous.innerHTML);
        current.innerHTML = ' ' + current.innerHTML;
    }
}

function clearAll() {
    current.innerHTML = '';
    previous.innerHTML = '';
}

