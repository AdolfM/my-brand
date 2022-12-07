const signUpForm = document.querySelector('#signup-form');
const loginInForm = document.querySelector('#login-form');
let savedUser = (localStorage.getItem('form-base') == null) ? [] : JSON.parse(localStorage.getItem('form-base'));
if (signUpForm && signUpForm !== "undefined") {

	signUpForm.addEventListener('submit', async function (e) {
		e.preventDefault()

		let username = document.querySelector('#username').value;
		let password = document.querySelector('#password').value;


		// required & validation
		if (!username || !password) {
			alert("Please fill the form")
			return
		}

		let newUser = {
			username,
			password,
			userId: Math.random().toString(36).substring(2, 10)
		}
		// const credentials = [...newUser]
		// checking if user exist


		username === "Adolf123" ? newUser.role = "admin" : newUser.role = "user"
		// add newUser to array of the form-base
		savedUser.push(newUser);
		localStorage.setItem('form-base', JSON.stringify(savedUser))
		alert('Successfully registered')
		window.location.href = "login.html"

	})
}

if (loginInForm && loginInForm !== "undefined") {
	loginInForm.addEventListener('submit', (e) => {
		e.preventDefault()

		let username = document.querySelector('#username').value;
		let password = document.querySelector('#password').value;

		// required & validation
		if (!username || !password) {
			alert("Please fill the form")
			return
		}

		for (const person of savedUser) {
			if (person.username === username && person.password === password) {
				if (person.role === "admin") {
					window.location.href = "my-brand/admin/dashboard.html"
				}
				else {
					window.location.href = "blog.html"
				}
			}
		}
	})
}

