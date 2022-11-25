
// Function to load a page
window.addEventListener("load", () => {
	// get stored blog from local storage
	blogs = JSON.parse(localStorage.getItem('blogs')) || [];

// variable with HTML ID

	const title = document.getElementById("title");
	const author = document.getElementById("author");
	const article = document.getElementById("article");
	const addBlogForm = document.querySelector("#blog-form");

// Add Blog

	addBlogForm.addEventListener("submit", (e) => {
		e.preventdefault();
		const blog = {
			title: e.target.title.value,
			author: e.target.author.value,
			article: e.target.article.value
		};
		// add blogs to an array of blog
		blogs.push(blog);
		// reset the form after submit
		e.target.reset();
	});
	// call displayBlog fn after submit
	displayBlog();
});

// Display our Blog

function displayBlog() {
	// assign blogInfo to html 
	const blogInfo = document.querySelector("blog-js");

	// display and map the data from local storage

	blogInfo.innerHTML = blogs
		.map(
			(el,index) =>
			`<h2 class="">${el.title}</h2>
			<div class=""><article><p>${el.article}</p></article></div>
			<div class=""><a href=#>${el.author}</a></div>`
			)
		.join("");
	}
