window.addEventListener('scroll', () => {
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 1000)
})


function totop(){
  window.scrollTo({
    top : 0,
    behavior:'smooth',
    
  })
  console.log('abc')
}

var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";


})