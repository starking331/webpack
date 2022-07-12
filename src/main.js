import('/src/main.css')

import sunglassesImg from '/assets/sunglasses.png'
import sparklesImg from '/assets/sparkles.png'

import anime from 'animejs';

document.documentElement.style.setProperty('--url-sunglasses', `url("` + sunglassesImg + `")`)
document.documentElement.style.setProperty('--url-sparkles', `url("` + sparklesImg + `")`)

anime({
    targets: document.querySelector('#app > h1'),
    rotate: '1turn',
    duration: 3000,
    loop: true
});