const button1 = document.getElementById("button1");
const modal =  document.querySelector('.modal');
const modelClose = document.getElementById('modal__content--close');
const modalClick = document.getElementById('modal-click');

function removeClass (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
};

button1.addEventListener('click', () => {
    removeClass(modal);
})

modelClose.addEventListener('click', () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
})

modalClick.addEventListener('click', () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
})
