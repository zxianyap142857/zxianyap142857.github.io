var nav = document.getElementById('navigation')
if (nav) {
  nav.innerHTML = `
  <nav>
    <div class="nav-left">
      <a href="./index.html"><img width="50px" src="./image/logo.png"></a>
      <div class="element-hover">NEWS</div>
      <div class="element-hover">PROMOTION</div>
    </div>
    <div class="nav-right">
      <button class="sign-in" onclick="location.href="./login.html">Sign&nbsp;In/Register</button>
      <img width="45px" src="./image/user-icon.png" alt="user icon" class="user-icon">
      <img width="60px" src="./image/menu-icon.png" alt="menu" id="menu-icon" class="element-hover" onclick="togglePanel()">
    </div>
  </nav>
  <div class="sidepanel" id="sidepanel">
    <div class="panel-link">
      <a href="#">News</a>
      <a href="./customer-services.html">Customer&nbsp;Services</a>
      <a href="./account.html">Account</a>
      <a href="./contact-us.html">Contact&nbsp;Us</a>
      <a href="./about-us.html">About&nbsp;Us</a>
    </div>
    <hr>
    <p>Follow&nbsp;Us</p>
    <div class="social-icon">
      <a href="https://facebook.com" target="_blank"><img width="70px" src="./image/facebook-icon.png" alt="facebook"></a>
      <a href="https://instagram.com" target="_blank"><img width="70px" src="./image/instagram-icon.png" alt="instagram"></a>
      <a href="https://youtube.com" target="_blank"><img width="70px" src="./image/youtube-icon.png" alt="youtube"></a>
      <a href="https://twitter.com" target="_blank"><img width="70px" src="./image/twitter-icon.png" alt="twitter"></a>
    </div>
  </div>
  <div class="nav-cover"></div>
  <div class="nav-placeholder"></div>
  `
}

var isBarOpen = false
var navCover = document.getElementsByClassName('nav-cover')[0]
function togglePanel() {
  isBarOpen = !isBarOpen
  if (isBarOpen) {
    document.getElementById('menu-icon').src = "./image/close-icon.png"
    document.getElementById("sidepanel").style.width = '400px'
    navCover.style.visibility = 'visible'
    navCover.style.opacity = 1
  } else {
    document.getElementById('menu-icon').src = "./image/menu-icon.png"
    document.getElementById("sidepanel").style.width = '0px'
    navCover.style.visibility = 'hidden'
    navCover.style.opacity = 0
  }
}
