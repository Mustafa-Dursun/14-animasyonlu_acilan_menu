const nav = document.getElementById('nav');
const buyut = document.getElementById('toogle')
const baslik = document.querySelector('.baslik');

buyut.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    baslik.classList.toggle('dondur')
})