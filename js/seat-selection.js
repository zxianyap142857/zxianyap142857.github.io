const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const periodId = urlParams.get('id')
const bookedSeat = []
const selectedSeat = []
const seats = document.getElementsByClassName("seat")

for (const seat of seats) {
  if (!seat.classList.contains('grey')) {
    seat.classList.add('green')
  }
}

seatsGet(periodId)
  .then((bookedSeat) => {
    for (let index = 0; index < seats.length; index++) {
      if (bookedSeat.indexOf(index) !== -1) {
        seats[index].classList.remove('green')
        seats[index].classList.remove('grey')
        seats[index].classList.add('red')
      }
    }
  })
  .catch()

function changecolor(index) {
  const clickedSeat = document.getElementsByClassName("seat")[index]

  if (clickedSeat.classList.contains('red')) { return }

  if (clickedSeat.classList.contains('green')) {
    clickedSeat.classList.remove('green')
    clickedSeat.classList.add('blue')
    selectedSeat.push(index)
  }
  else {
    clickedSeat.classList.remove('blue')
    clickedSeat.classList.add('green')
    selectedSeat.splice(selectedSeat.indexOf(index), 1)
  }
}

function changecolorgrey(index) {
  const clickedSeat = document.getElementsByClassName("seat")[index]

  if (clickedSeat.classList.contains('red')) { return }

  if (clickedSeat.classList.contains('grey')) {
    clickedSeat.classList.remove('grey')
    clickedSeat.classList.add('blue')
    selectedSeat.push(index)
  }
  else {
    clickedSeat.classList.remove('blue')
    clickedSeat.classList.add('grey')
    selectedSeat.splice(selectedSeat.indexOf(index), 1)
  }
}

function next() {
  selectedSeat.sort((a, b) => { return a - b })
  var price = selectedSeat.length * 2;
  localStorage.setItem("price", price.toString())
  localStorage.setItem("selectedSeat", selectedSeat)
  location.href = '/total.html'
}