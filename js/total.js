const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");


selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});

const optionMenu2 = document.querySelector(".select-menu2"),
  selectBtn2 = optionMenu2.querySelector(".select-btn2"),
  options2 = optionMenu2.querySelectorAll(".option2"),
  sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");


selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));

options2.forEach(option2 => {
  option2.addEventListener("click", () => {
    let selectedOption = option2.querySelector(".option-text2").innerText;
    sBtn_text2.innerText = selectedOption;

    optionMenu2.classList.remove("active");
  });
});

const optionMenu3 = document.querySelector(".select-menu3"),
  selectBtn3 = optionMenu3.querySelector(".select-btn3"),
  options3 = optionMenu3.querySelectorAll(".option3"),
  sBtn_text3 = optionMenu3.querySelector(".sBtn-text3");


selectBtn3.addEventListener("click", () => optionMenu3.classList.toggle("active"));

options3.forEach(option3 => {
  option3.addEventListener("click", () => {
    let selectedOption = option3.querySelector(".option-text3").innerText;
    sBtn_text3.innerText = selectedOption;

    optionMenu3.classList.remove("active");
  });
});

const optionMenu4 = document.querySelector(".select-menu4"),
  selectBtn4 = optionMenu4.querySelector(".select-btn4"),
  options4 = optionMenu4.querySelectorAll(".option4"),
  sBtn_text4 = optionMenu4.querySelector(".sBtn-text4");


selectBtn4.addEventListener("click", () => optionMenu4.classList.toggle("active"));

options4.forEach(option4 => {
  option4.addEventListener("click", () => {
    let selectedOption = option4.querySelector(".option-text4").innerText;
    sBtn_text4.innerText = selectedOption;

    optionMenu4.classList.remove("active");
  });
});

document.getElementsByClassName("movie")[0].innerHTML = localStorage.getItem("movie");
document.getElementsByClassName("date")[0].innerHTML = localStorage.getItem("showDate");
document.getElementsByClassName("totalprice")[0].innerHTML = "Total: RM " + localStorage.getItem("price");
document.getElementsByClassName("seatnumber")[0].innerHTML = "Seat Number: " + localStorage.getItem("selectedSeat");