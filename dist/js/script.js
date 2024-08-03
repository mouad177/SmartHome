let mobileBtn =document.getElementById('mobile-btn');
let mobileMenu = document.getElementById('mobile-menu');
let close = document.querySelector('.hide');

mobileBtn.onclick = function(){
mobileMenu.classList.toggle('hidden');
mobileBtn.classList.add('hide');
close.classList.remove('hide');
}
close.onclick = function(){
  mobileMenu.classList.toggle('hidden');
  close.classList.add('hide');
  mobileBtn.classList.remove('hide');
}
