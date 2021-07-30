var mode = document.getElementById('mode')
var banner_img = document.getElementById('banner_img')
var banner_imgs = document.getElementById('shape_w')
var logo = document.getElementById('logo')
var logo1 = document.getElementById('logo1')
var logo2 = document.getElementById('logo2')
var logo3 = document.getElementById('logo3')
var logo4 = document.getElementById('logo4')

mode.onclick = function () {
  document.body.classList.toggle('dark_mode')
  if (document.body.classList.contains('dark_mode')) {
    mode.src = 'images/sun.png'
    banner_img.src = 'images/banner.png'
    banner_imgs.src = 'images/3.png'
    logo.src = 'images/logo.png'
    logo1.src = 'images/fi.png'
    logo2.src = 'images/ji.png'
    logo3.src = 'images/k.png'
    logo4.src = 'images/li.png'
  } else {
    mode.src = 'images/moon.png'
    banner_img.src = 'images/banner_white.png'
    banner_imgs.src = 'images/3_white.png'
    logo.src = 'images/logo1.png'
    logo1.src = 'images/i.png'
    logo2.src = 'images/j.png'
    logo3.src = 'images/k.png'
    logo4.src = 'images/l.png'
  }
}

window.addEventListener('scroll', function () {
  let navArea = document.getElementById('navigation')

  if (window.pageYOffset > 0) {
    navArea.classList.add('is-sticky')
  } else {
    navArea.classList.remove('is-sticky')
  }
})
