var nav = document.getElementById('navigation')
if (nav) {
  nav.innerHTML = `
  <nav>
    <div class="nav-left">
      <a href="/index.html"><img width="50px" src="./image/logo.png"></a>
      <div class="element-hover" onclick="location.href = '/news.html'">NEWS</div>
    </div>
    <div class="nav-right">
      <button class="sign-in" onclick="location.href='/login.html'">Sign&nbsp;In/Register</button>
      <img src="./image/user-icon.png" alt="user icon" class="user-icon" onclick="location.href='/account.html'">
      <img width="60px" src="./image/menu-icon.png" alt="menu" id="menu-icon" class="element-hover" onclick="togglePanel()">
    </div>
  </nav>
  <div class="sidepanel" id="sidepanel">
    <div class="panel-link">
      <a href="./news.html">News</a>
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

const userId = sessionStorage.getItem('userId')
if (userId && userId !== 'null') {
  const signInButton = document.getElementsByClassName('sign-in')[0]
  signInButton.style.display = 'none'

  if (sessionStorage.getItem('userPhotoUrl') !== 'null') {
    document.getElementsByClassName('user-icon')[0].src = sessionStorage.getItem('userPhotoUrl')
  }
  else {
    document.getElementsByClassName('user-icon')[0].src = './image/user-sign-in-icon.png'
  }

}
else {
  checkAuth()
}

var isBarOpen = false
var navCover = document.getElementsByClassName('nav-cover')[0]
function togglePanel() {
  isBarOpen = !isBarOpen
  if (isBarOpen) {
    document.getElementById('menu-icon').src = "./image/close-icon.png"
    navCover.style.visibility = 'visible'
    navCover.style.opacity = 1

    if (screen.width > 400) {
      document.getElementById("sidepanel").style.width = '400px'
    }
    else {
      document.getElementById("sidepanel").style.width = '100%'
    }

  } else {
    document.getElementById('menu-icon').src = "./image/menu-icon.png"
    document.getElementById("sidepanel").style.width = '0px'
    navCover.style.visibility = 'hidden'
    navCover.style.opacity = 0
  }
}