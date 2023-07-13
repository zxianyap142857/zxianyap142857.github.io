const firebaseConfig = {
  apiKey: "AIzaSyBfDfSTzGI5Zzuc9_n7w8ULqA1HNimp8as",
  authDomain: "bit-project-3035f.firebaseapp.com",
  databaseURL: "https://bit-project-3035f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bit-project-3035f",
  storageBucket: "bit-project-3035f.appspot.com",
  messagingSenderId: "345904641674",
  appId: "1:345904641674:web:309139b0df7fc23fb05f73"
}

let firebaseApp
let firebaseAuth
let firebaseDatabase

function initFirebase(type = 'all') {
  if (!firebaseApp) {
    firebaseApp = firebase.initializeApp(firebaseConfig)
  }

  if ((type === 'auth' || type === 'all') && !firebaseAuth) {
    firebaseAuth = firebaseApp.auth()
  }

  if ((type === 'database' || type === 'all') && !firebaseDatabase) {
    firebaseDatabase = firebaseApp.database()
  }
}

async function checkAuth() {
  initFirebase('auth')

  return new Promise((resolve, reject) => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        sessionStorage.setItem('userId', user.uid)
        sessionStorage.setItem('userPhotoUrl', user.photoURL)

        const signInButton = document.getElementsByClassName('sign-in')[0]
        signInButton.style.display = 'none'

        if (user.photoURL) {
          document.getElementsByClassName('user-icon')[0].src = user.photoURL
        }
        else {
          document.getElementsByClassName('user-icon')[0].src = './image/user-sign-in-icon.png'
        }

        resolve()
      } else {
        const signInButton = document.getElementsByClassName('sign-in')[0]
        signInButton.style.display = 'block'
        document.getElementsByClassName('user-icon')[0].src = './image/user-icon.png'

        resolve()
      }
    })
  })
}

async function getUserDetail() {
  await checkAuth()

  return firebaseAuth.currentUser
}

function signUpWithEmail(email, password, name) {
  initFirebase('auth')

  firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      user = userCredential.user;
      console.log(userCredential)

      user.sendEmailVerification()
        .then(() => {
          return user.updateProfile({
            displayName: name
          })
        })
        .then(() => {
          location.href = '/index.html'
        }).catch((error) => {
          console.error(error)
        });
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function signInWithEmail(email, password) {
  initFirebase('auth')

  firebaseAuth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      user = userCredential.user
      console.log(userCredential)

      location.href = '/index.html'
    })
    .catch((error) => {
      console.log(error.code);

      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        alert('invalid email or password')
      }
    });
}

function signInWithFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider()
  popupSignIn(provider)
}

function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider()
  popupSignIn(provider)
}

function popupSignIn(provider) {
  initFirebase('auth')

  firebaseAuth.signInWithPopup(provider)
    .then((result) => {

      console.log(result.user);

      location.href = '/index.html'
    }).catch((error) => {
      console.log(error);
    });
}

function signOut() {
  initFirebase('auth')

  firebaseAuth.signOut()
    .then(() => {
      sessionStorage.removeItem('userId')
      sessionStorage.removeItem('userPhotoUrl')
      location.href = '/index.html'
    })
}

async function seatsGet(periodId) {
  initFirebase('database')

  return new Promise((resolve, reject) => {
    firebaseDatabase.ref(`/seats/${periodId}`)
      .once('value', (snapshot) => {
        const value = snapshot.val()

        if (value === null) {
          resolve([])
        }

        const selectedSeats = []
        for (const key in value) {
          selectedSeats.push(parseInt(key))
        }
        resolve(selectedSeats)
      }, (err) => {
        console.error(err)
        reject()
      })
  })
}

async function seatsPost(periodId, userId, seats) {
  initFirebase('database')

  for (const seat of seats) {
    await firebaseDatabase.ref(`/seats/${periodId}/${seat}`)
      .set(userId)
      .catch((err) => {
        console.error(err)
      })
  }

  return
}

async function reviewGet(movieId, page) {
  initFirebase('database')

  return new Promise((resolve, reject) => {

    firebaseDatabase.ref(`/reviews/${movieId}`).startAt(null, `${(page - 1) * 10}`).endBefore(null, `${page * 10}`)
      .once('value', (snapshot) => {
        const value = snapshot.val()

        if (!value) {
          resolve({ error: 'no more content' })
        }

        const reviews = []

        if (typeof value === 'array') {
          for (const item of value) {
            if (!item || item.deleted) {
              continue
            }
            reviews.push(item)
          }
        }

        if (typeof value === 'object') {
          for (const key in value) {
            if (!value[key] || value[key].deleted) {
              continue
            }
            reviews.push(value[key])
          }
        }

        resolve(reviews)
      }, (err) => {
        console.error(err)
        reject()
      })
  })
}

async function transactionGet(userId) {
  initFirebase('database')

  return new Promise((resolve, reject) => {

    firebaseDatabase.ref(`/transaction/${userId}`)
    .once('value', (snapshot) => {
      const value = snapshot.val()

      resolve(value)
    }, (err) => {
      console.error(err)
      reject()
    })

  })
}

async function transactionPost(userId, time, data) {
  initFirebase('database')

    await firebaseDatabase.ref(`/transaction/${userId}/${time}`)
      .set(data)
      .catch((err) => {
        console.error(err)
      })

  return
}