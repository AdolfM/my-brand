		if (localStorage.getItem('blog-demo') != null) {
			var sampleblog = JSON.parse(localStorage.getItem('blog-demo'));
		} else {
			var sampleblog = [];
		}
		document.getElementById('my-form').addEventListener('submit', (e) => {
			e.preventDefault();

			const title = document.getElementById('title').value
			const author = document.getElementById('author').value
			const post = document.getElementById('post').value
			// object datastructure

			const  blog = {
				title,
				author,
				post
			}

			sampleblog.push(blog)

			// save to localStorage
			localStorage.setItem('blog-demo', JSON.stringify(sampleblog))

			// how to retrieve from localstorage
			//JSON.parse(localStorage.getItem('blog-demo'))			
		});
		document.addEventListener('DOMContentLoaded', () => {
			console.log(JSON.parse(localStorage.getItem('blog-demo')))	

			// You will have to loop through the array and out put it in the body. you can try to google how it;s done
		// i have to go now.
		});