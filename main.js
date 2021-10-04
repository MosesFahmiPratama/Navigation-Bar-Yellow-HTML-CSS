const menuBar = document.querySelector('.menu-bar');
const navigasi = document.querySelector('ul');

menuBar.onclick = () => {
 navigasi.classList.toggle('active');
 menuBar.classList.toggle('active');
}