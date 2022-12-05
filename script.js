const signUpForm = document.querySelector('#signup-form');
const loginInForm = document.querySelector('#login-form');

let clientUser = []

if (signUpForm && signUpForm !== "undefined") {

 signUpForm.addEventListener('submit', async function(e){
            e.preventDefault()

		const [username, password] = [
			document.querySelector('#username').value,
			document.querySelector('#password').value,
			]

		// required & validation
		if (!username || !password) {
			alert("Please fill the form")
			return
		}

		const newUser =  {
			username,
			password,
			userId: Math.random().toString(36).substring(2,10)
		}
		// const credentials = [...newUser]
		// checking if user exist
		const savedUser = JSON.parse(localStorage.getItem('form-base'))

			username === "Adolf123" ? newUser.role = "admin" : newUser.role = "user"
			// add newUser to array of the form-base
			//newUser.push(form-base);
		 	localStorage.setItem('form-base', JSON.stringify(newUser))
		 	alert('Successfully registered')
		 	window.location.href="login.html"
				 
	})
}

 
if (loginInForm && loginInForm !== "undefined"){
	loginInForm.addEventListener('submit', (e) => {
		e.preventDefault()
		const [username, password] = [
			document.querySelector('#username').value,
			document.querySelector('#password').value
		]
		// required & validation
		if (!username || !password) {
		alert("Please fill the form")
			return
				}
		const savedUser = JSON.parse(localStorage.getItem('form-base'))
		if (savedUser.username === username && savedUser.password === password) {
			if (savedUser.role === "admin") {
				window.location.href="admin/dashboard.html"
			}
			else {
				window.location.href="blog.html"
			}
		}
	})
}

