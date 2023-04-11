// Product btn
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const input1 = document.querySelector('.inptuProduct');
const input2 = document.querySelector('.inptuProduct2');
const input3 = document.querySelector('.inptuProduct3');
const backInput = document.querySelector('.dimensionsInput');
const backInput2 = document.querySelector('.dimensionsInput2');
const backInput3= document.querySelector('.dimensionsInput3');

btn1.addEventListener('click', () => {
  btn1.classList.toggle('activeBtn');
  input1.classList.toggle('activeBtn');
  backInput.classList.toggle('activeBtn');
});
btn2.addEventListener('click', () => {
  btn2.classList.toggle('activeBtn');
  input2.classList.toggle('activeBtn');
  backInput2.classList.toggle('activeBtn');
});
btn3.addEventListener('click', () => {
  btn3.classList.toggle('activeBtn');
  input3.classList.toggle('activeBtn');
  backInput3.classList.toggle('activeBtn');
});