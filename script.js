'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

console.log(btnShowModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnShowModal.length; i++)
  // Add Event Handler for button click
  btnShowModal[i].addEventListener('click', openModal);
// Other way to remove hidden classes, less efficent
//modal.getElementsByClassName.display = 'block';

// Close modal when clicked
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// ESC key to close Modal: keydown, keypress, keyup
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
