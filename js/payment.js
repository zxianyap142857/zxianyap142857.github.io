document.getElementById("movie").innerHTML = "Movie Name: " + localStorage.getItem("movie")
document.getElementById("date").innerHTML = "Show Date: " + localStorage.getItem("showDate")
document.getElementById("seatnumber").innerHTML = "Seat Number: " + localStorage.getItem("selectedSeat")
document.getElementById("amount").innerHTML = "Amount: RM " + localStorage.getItem("price")

function next() {

  const periodId = localStorage.getItem('periodId')
  const selectedSeat = JSON.parse(`[${localStorage.getItem("selectedSeat")}]`)

  if (periodId) {
    const jsonText = JSON.stringify({ id: periodId, user: user.uid, seats: selectedSeat })

    fetch(apiURL.seatPost, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: jsonText })
      .then((res) => {
        console.log(res)
        location.href = './transaction.html'
      })
  }
}