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

// fixedcatalog for catalog.html
const catalogLeftLocation = document.querySelector('.mainCatalogLeftLocation');
const oneThirdScreen = window.innerHeight / 3;
const catalogLeftMobileLocation = document.querySelector('.mainCatalogLeftLocationMobile');
window.addEventListener('scroll', () => {

if (window.scrollY >= oneThirdScreen) {
catalogLeftLocation.classList.add('fixed-active');
} else {
catalogLeftLocation.classList.remove('fixed-active');
}
});

//scroll without anchor links
function scrollToBlock(blockId) 
{ const block = document.querySelector(blockId);
  block.scrollIntoView({behavior: 'smooth'});
}

