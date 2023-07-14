placeItem()

async function placeItem () {
  const user = await getUserDetail()

  if (!user) {
    alert('you are not sign in yet')
    location.href = '/index.html'
  }

  document.getElementById('username').innerText = user.displayName
  document.getElementById('email').innerText = user.email

  if (user.photoURL) {
    document.querySelector('.profile img').src = user.photoURL
  }
  else {
    document.querySelector('.profile img').src = './image/user-sign-in-icon.png'
  }

  const bookingHistory = await transactionGet(user.uid)

  if (!bookingHistory) {
    return
  }

  const container = document.getElementById('history-container')

  for (const key in bookingHistory) {
    const div = document.createElement('div')
    div.classList.add('history')
    div.innerHTML = `
    Booking ID: ${key} <br>
    Transaction Date: ${getTime(key)} <br>
    Price: RM ${bookingHistory[key].price} <br>
    Location: ${bookingHistory[key].location} <br>
    Movie Name: ${bookingHistory[key].movie} <br>
    Show Date: ${bookingHistory[key].showDate} <br>
    Seats: ${bookingHistory[key].seats}
    `

    container.prepend(div)
  }
}

function getTime(time) {
  const date = new Date(parseInt(time))
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}