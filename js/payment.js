document.getElementById("movie").innerHTML = "Movie Name: " + localStorage.getItem("movie")
document.getElementById("date").innerHTML = "Show Date: " + localStorage.getItem("showDate")
document.getElementById("seatnumber").innerHTML = "Seat Number: " + localStorage.getItem("selectedSeat")
document.getElementById("amount").innerHTML = "Amount: RM " + localStorage.getItem("price")

async function next() {

  const userId = sessionStorage.getItem('userId')
  const periodId = localStorage.getItem('periodId')
  const selectedSeat = JSON.parse(`[${localStorage.getItem("selectedSeat")}]`)
  const transactionDate = Date.now()

  if (!userId || userId === 'null') {
    alert('please sign in to continue pay')
    return
  }

  if (periodId) {
    localStorage.setItem("transactionDate", transactionDate)

    const data = {
      price: localStorage.getItem("price"),
      location: localStorage.getItem("location"),
      movie: localStorage.getItem("movie"),
      showDate: localStorage.getItem("showDate"),
      seats: selectedSeat
    }

    await seatsPost(periodId, userId, selectedSeat)

    await transactionPost(userId, transactionDate, data)

    location.href = '/transaction.html'
  }
}