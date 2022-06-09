// Icons Links
document.querySelector('.footer-icons .facebook').addEventListener('click', facebookIcon);
document.querySelector('.footer-icons .twitter').addEventListener('click', twitterIcon);
document.querySelector('.footer-icons .instagram').addEventListener('click', instagramIcon);
document.querySelector('.footer-icons .youtube').addEventListener('click', youtubeIcon);

function facebookIcon() {
document.location.href = 'https://www.facebook.com/MardiGrasNewOrleans';
}

function twitterIcon() {
document.location.href = 'https://twitter.com/MardiGrasNOLA';
}

function instagramIcon() {
document.location.href = 'https://www.instagram.com/mardigrasneworleans/';
}

function youtubeIcon() {
document.location.href = 'https://www.youtube.com/channel/UCOrq1qF6dVDn9Do-wvbKh0Q';
}

// Top Button
let scrollBtn = document.querySelector(".btn-top");

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

window.addEventListener('scroll', () => {
if (window.pageYOffset > 600) {
    scrollBtn.classList.add("active");
}
else {
    scrollBtn.classList.remove("active");
}
});