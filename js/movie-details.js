const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const movieId = urlParams.get('id')
let reviewsPage = 1

if (movieId) {
  fetch(`../json/${movieId}.json`)
    .then((res) => {
      if (res.status < 200 && 299 < res.status) {
        throw new Error(res.json())
      }

      return res.json()
    })
    .then((data) => {
      const details = document.getElementsByClassName('details')[0]

      details.innerHTML =
        `
        <h2 class="detail-title">${data.title}</h2>
        <div class="detail-box">
          <ul class="detail-general-items">
            <li>Release Date: ${data.releaseDate}</li>
            <li>Language: ${data.language}</li>
            <li>Duration: ${data.duration} Minutes</li>
            <li>Subtitle: ${data.subtitles}</li>
            <li>Genre: ${data.genre}</li>
            <li>Classification: ${data.classification}</li>
          </ul>
          <div class="detail-director">
            <div class="bold">Director</div>
            <div>${data.director}</div>
          </div>
          <div class="detail-cast">
            <div class="bold">Cast</div>
            <div>${data.cast.join(', ')}</div>
          </div>
        </div>
        `

      if (data.poster) {
        const image = document.createElement('img')
        image.src = data.poster
        image.alt = 'poster'
        image.style.width = '300px'

        document.getElementsByClassName('poster')[0].append(image)
      }
      if (data.trailer) {
        document.getElementsByClassName('yt-player')[0].src = data.trailer
      }

      document.getElementsByClassName('trailer-button')[0].addEventListener('click', openTrailer)
      document.getElementsByClassName('trailer-close')[0].addEventListener('click', closeTrailer)
    })
    .catch(async (err) => {
      console.error(await err)
    })

  getReviews()
  document.getElementsByClassName('load-more')[0].addEventListener('click', getReviews)
}

function openTrailer() {
  document.getElementsByClassName('trailer')[0].style.display = 'flex'
}

function closeTrailer() {
  document.getElementsByClassName('trailer')[0].style.display = 'none'
}

function formatTimestamp(utcMilliseconds) {
  const date = new Date(utcMilliseconds)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${year}/${month}/${day} ${hours}:${minutes}`;
}

function getReviews() {
  reviewGet(movieId, reviewsPage)
    .then((data) => {

      if (typeof data === 'object' && data.error) {
        document.getElementsByClassName('load-more')[0].textContent = 'No More Reviews'
        document.getElementsByClassName('load-more')[0].removeEventListener('click', getReviews)
        return
      }

      const review = document.getElementsByClassName('reviews')[0]

      for (const item of data) {
        const div = document.createElement('div')
        div.className = 'comment'
        div.innerHTML =
          `
        <img class="user-picture" src="./image/user-icon.png" alt="User Picture">
        <div class="comment-details">
          <div class="username">${item.username}</div>
          <div class="rating">Rating: ${item.rating} stars</div>
          <div class="comment-text">${item.comment}</div>
          <div class="date">Posted on ${formatTimestamp(item.date)}</div>
        </div>
        `
        review.append(div)
      }

      reviewsPage++
    })
    .catch()
}