// headerModalCatalog
const openModalBtn = document.getElementById("modal-open-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];
const modalOverlay = document.getElementById("modalOverlay")
openModalBtn.onclick = function() {
  modal.style.display = "block";
  modalOverlay.style.display = "block"
}

closeBtn.onclick = function() {
  modal.style.display = "none";
  modalOverlay.style.display = "none"
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// reviewsModal
function openImage(src) {
    var modal = document.querySelector('.modalImg');
    var modalImage = document.querySelector('#modal-image');
    modalImage.src = src;
    modal.style.display = 'block';
  }
  
  function closeModal() {
    var modal = document.querySelector('.modalImg');
    modal.style.display = 'none';
  }
  
  // catalogModal
  function showModal(modalId) {
    var modalShow = document.getElementById(modalId);
    modalShow.style.display = "block";
  }
  
  function closeModalShow(modalId) {
    var modalShow = document.getElementById(modalId);
    modalShow.style.display = "none";
  }
  // mobileMenu
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const over = document.querySelector('.overMenu')

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  burgerMenu.children[0].classList.toggle('first');
  burgerMenu.children[1].classList.toggle('second');
  burgerMenu.children[2].classList.toggle('third');
});