// catalog
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

// product.html counter 
function increaseValue(inputId) {
  let input = document.getElementById(inputId);
  input.value = parseInt(input.value) + 1;
}

function decreaseValue(inputId) {
  let input = document.getElementById(inputId);
  input.value = parseInt(input.value) - 1;
}



// filter technicalInformation
function filterBlocks(filter) {
  // Get all blocks
  var blocks = document.getElementsByClassName("block");

  // Loop through blocks and show/hide based on selected filter
  for (var i = 0; i < blocks.length; i++) {
      if (blocks[i].classList.contains(filter)) {
          blocks[i].style.display = "block";
      } else {
          blocks[i].style.display = "none";
      }
  }
} 

// validation
function validateForm() {
  var phone = document.forms["myForm"]["phone"].value;
  var regex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
  
  if (!regex.test(phone)) {
    document.getElementById("phone").classList.add("error");
    document.getElementById("phone-error").style.display = "block";
    return false;
  }
  
  return true;
}

document.getElementById("phone").addEventListener("input", function() {
  if (this.classList.contains("error")) {
    this.classList.remove("error");
    document.getElementById("phone-error").style.display = "none";
  }
});



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

