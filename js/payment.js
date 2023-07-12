document.getElementById("movie").innerHTML = "Movie Name: " + localStorage.getItem("movie")
document.getElementById("date").innerHTML = "Show Date: " + localStorage.getItem("showDate")
document.getElementById("seatnumber").innerHTML = "Seat Number: " + localStorage.getItem("selectedSeat")
document.getElementById("amount").innerHTML = "Amount: RM " + localStorage.getItem("price")

async function next() {

  const userId = sessionStorage.getItem('userId')
  const periodId = localStorage.getItem('periodId')
  const selectedSeat = JSON.parse(`[${localStorage.getItem("selectedSeat")}]`)
  const data = {}

  if (!userId || userId === 'null') {
    alert('please sign in to continue pay')
    return
  }

  if (periodId) {
    await seatsPost(periodId, userId, selectedSeat)

    location.href = '/transaction.html'
  }
}