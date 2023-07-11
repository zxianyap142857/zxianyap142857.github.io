document.getElementById("date").innerHTML = "Transaction Date: " + getTime()
document.getElementById("amount").innerHTML = "Amount: RM " + localStorage.getItem("price")
document.getElementById("location").innerHTML = "Cinema: " + localStorage.getItem("location")
document.getElementById("movie").innerHTML = "Movie Name: " + localStorage.getItem("movie")
document.getElementById("showdate").innerHTML = "Show Date: " + localStorage.getItem("showDate")
document.getElementById("seatnumber").innerHTML = "Seat Number: " + localStorage.getItem("selectedSeat")

function getTime() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}