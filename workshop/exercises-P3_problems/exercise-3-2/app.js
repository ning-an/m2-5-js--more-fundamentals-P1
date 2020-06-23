// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const btnList = document.querySelector('.buttons');
const btns = document.querySelectorAll('button');
btns.forEach(elem => {
    elem.style.backgroundColor = 'gold';
    elem.style.opacity = '100';
});

function toggleColor(elem, color) {
    if (elem.style.backgroundColor === 'gold') {
        elem.style.backgroundColor = color;
    } else {
        elem.style.backgroundColor = 'gold';
    }
}

function clickHandler(e) {
    e.preventDefault();
    let btnId = e.target.id;
    let btn = document.querySelector(`#${btnId}`);
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
    }
}

btnList.addEventListener('click', clickHandler);