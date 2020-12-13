const fetchBlogs = async () => {
  let blogs = null;
  blogs = await fetch("../blogs.json");
  return blogs;
};

document.addEventListener("DOMContentLoaded", async () => {
  let blogs = await (await fetchBlogs()).json();
  console.log(blogs);
  let blogUl = document.getElementById("myblogs");

  //   ? iterate through blogs
  blogs.map((blog) => {
    blogUl.innerHTML += `
      <li>
        <article class="showcase-list container container-center ">
            <h1>${blog.title}</h1>
        <small class="blog-date">${blog.date}</small>
        <p class="blog-content">${blog.content}</p>
        <a class="link link-primary" href="https://repl.it/@tanaypratap/quiz-on-marvel?embed=true">Read More</a>
        </article>  
      </li>
      `;
  });
});
