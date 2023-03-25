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

// mask tel
window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

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

// scroll 

const anchors = document.querySelectorAll('a[href^="#"]')


for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() 
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


const btn1 = document.querySelector('.dimensionsInput');
const input1 = document.querySelector('.inptuProduct');
const select1 = document.querySelector('.select1');
btn1.addEventListener('click', (e) => {
  
  btn1.classList.toggle('activeBtn');
  input1.classList.toggle('activeBtn');
  select1.classList.toggle('activeBtn');
  e.preventDefault();
});