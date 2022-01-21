var users = []

const signinForm = document.getElementById('signin-form')

signinForm.addEventListener('submit', signin)

function signin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const user = {
        id: new Date(),
        email,
        password
    }
    console.log(users, user, "teeee")
    const found = users.find(e => e.email == email)
    if (found) {
        alert('user already exist')
    } else {
        users.push(user)
        window.open('products.html')
        alert(`welcome ${email}`)
        console.log(users)

    }
}
const formLogin = document.getElementById('login-form')

const email = document.getElementById('email-login').value
const password = document.getElementById('password-login').value

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const found = users.find(e => e.email == email && e.password == password)
    console.log(found)
    if (found) {
        window.open('products.html')
        alert(`welcome ${email}`)
    } else {
        alert('wrong user credentials')

    }
})
