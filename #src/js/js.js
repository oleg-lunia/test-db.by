document.querySelector('.menu-burger__header').addEventListener('click', function(){
  document.querySelector('.menu-burger__header').classList.toggle('open-menu');
  document.querySelector('.header-nav').classList.toggle("open-menu");
})



document.querySelector('.menu-burger__header').addEventListener('click', function(event){
  document.querySelector('.menu-burger__header').classList.toggle('active');
  document.querySelector('body').classList.toggle("fixed-page");
})