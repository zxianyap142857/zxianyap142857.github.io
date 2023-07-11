const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const movieId = urlParams.get('id')

if (movieId) {
  fetch(`../json/${movieId}.json`)
    .then((res) => {
      if (res.status < 200 && 299 < res.status) {
        throw new Error(res.json())
      }

      return res.json()
    })
    .then((data) => {
      document.getElementById('poster').src = data.poster
      document.getElementById('detail-title').innerText = data.title
      document.getElementById('detail-release-date').innerText = `Release Date: ${data.releaseDate}`
      document.getElementById('detail-duration').innerText = `Duration: ${data.duration} Minutes`
      document.getElementById('detail-classification').innerText = `Classification: ${data.classification}`
      document.getElementById('detail-genre').innerText = `Genre: ${data.genre}`
    })
    .catch(async(err) => {
      console.error(await err)
    })
}

const selectedInformation = [ "", "", "", ""]
const currentDate = new Date()
const dateOption = document.getElementsByClassName('options2')[0]
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const template = document.createElement('template');

if (movieId) {
  selectedInformation[0] = String(movieId.toString()).padStart(2, '0')
}

for (let index = 0; index < 30; index++) {
  const specifiedDate = addDays(currentDate, index);
  
  template.innerHTML += `
    <li class="option2">
      <i class="calender"><img src="./image/calendar-icon.png" style="width: 20px;"></i>
      <span class="option-text2" value="${formatDate(specifiedDate)}">${formatDateName(specifiedDate)}</span>
    </li>
  `
}

dateOption.append(...template.content.childNodes)

function next() {
  if (selectedInformation.indexOf("") !== -1) {
    alert('You are not selected full booking detail')
    return
  }

  localStorage.setItem("movie", document.getElementById('detail-title').innerText)
  localStorage.setItem("location", document.getElementsByClassName('sBtn-text')[0].innerText)
  localStorage.setItem("showDate", `${document.getElementsByClassName('sBtn-text2')[0].innerText} ${document.getElementsByClassName('sBtn-text3')[0].innerText}`)
  localStorage.setItem("periodId", selectedInformation.join(''))

  location.href = `/seat-selection.html?id=${selectedInformation.join('')}`
}

function addDays(date, days) {
  const dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() + days);
  return dateCopy;
}

function formatDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}${month}${day}`;
}

function formatDateName(date) {
  const year = date.getFullYear()
  const month = monthNames[date.getMonth()]
  const day = date.getDate()

  return `${year} ${month} ${day}`;
}

const optionMenu = document.querySelector(".select-menu")
const selectBtn = optionMenu.querySelector(".select-btn")
const options = optionMenu.querySelectorAll(".option")
const sBtn_text = optionMenu.querySelector(".sBtn-text")

// toggle selection menu
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"))

// add click event to selection menu item
options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text")
    selectedInformation[1] = selectedOption.getAttribute('value')
    sBtn_text.innerText = selectedOption.innerText;

    optionMenu.classList.remove("active");
  });
});

const optionMenu2 = document.querySelector(".select-menu2")
const selectBtn2 = optionMenu2.querySelector(".select-btn2")
const options2 = optionMenu2.querySelectorAll(".option2")
const sBtn_text2 = optionMenu2.querySelector(".sBtn-text2")

selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));

options2.forEach(option2 => {
  option2.addEventListener("click", () => {
    let selectedOption = option2.querySelector(".option-text2")
    selectedInformation[2] = selectedOption.getAttribute('value')
    sBtn_text2.innerText = selectedOption.innerText

    optionMenu2.classList.remove("active");
  });
});

const optionMenu3 = document.querySelector(".select-menu3")
const selectBtn3 = optionMenu3.querySelector(".select-btn3")
const options3 = optionMenu3.querySelectorAll(".option3")
const sBtn_text3 = optionMenu3.querySelector(".sBtn-text3")

selectBtn3.addEventListener("click", () => optionMenu3.classList.toggle("active"));

options3.forEach(option3 => {
  option3.addEventListener("click", () => {
    let selectedOption = option3.querySelector(".option-text3")
    selectedInformation[3] = selectedOption.getAttribute('value')
    sBtn_text3.innerText = selectedOption.innerText

    optionMenu3.classList.remove("active");
  });
});