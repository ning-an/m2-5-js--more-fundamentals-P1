// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.
const btnList = document.querySelector('.buttons');
const btns = document.querySelectorAll('button');

function original() {
    btns.forEach(elem => {
        elem.style.backgroundColor = 'gold';
        elem.style.opacity = '100';
        elem.classList.remove('jitters');
    });
    document.querySelector('.reset').style.backgroundColor = '#eeeeee';
}

original();

function toggleColor(elem, color) {
    elem.style.backgroundColor = elem.style.backgroundColor === 'gold' ? color : 'gold';
}

function clickHandler(e) {
    e.preventDefault();
    let btnId = e.target.id;
    let btn = document.getElementById(btnId);
    switch (btnId) {
        case 'btn-1':
            btn.style.opacity = btn.style.opacity === '100' ? 0 : '100';
            break;
        case 'btn-2':
            toggleColor(btn, 'crimson');
            break;
        case 'btn-3':
            toggleColor(btn, 'lightblue');
            break;
        case 'btn-4':
            btn.classList.toggle('jitters');
            break;
        case 'reset':
            original();
            break;
    }
}
btnList.addEventListener('click', clickHandler);