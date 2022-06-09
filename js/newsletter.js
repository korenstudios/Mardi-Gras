let newsletterBtn = document.querySelector('.newsletter-btn');
let newsletterPopup = document.querySelector('#newsletter-popup');
let closeBtn = document.querySelector('.close-btn');
let confe = document.querySelector('#my-canvas');

newsletterBtn.onclick = () => {
    newsletterPopup.classList.add('active');
    confe.classList.add('active');
}

closeBtn.onclick = () => {
    newsletterPopup.classList.remove('active');
    confe.classList.remove('active');
}

//prevent the Submit
const form = document.getElementById('newsletter-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

//javaScript confetti
let confettiSettings = { target: 'my-canvas' };
let confetti = new ConfettiGenerator(confettiSettings);
confetti.render();