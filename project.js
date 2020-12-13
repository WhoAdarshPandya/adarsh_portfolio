const fetchProjects = async () => {
  let projects = null;
  projects = await fetch("../projects.json");
  return projects;
};

document.addEventListener("DOMContentLoaded", async () => {
  let projects = await (await fetchProjects()).json();
  console.log(projects);
  let projectUl = document.getElementById("myprojects");

  //   ?iterate through projects
  projects.map((project) => {
    projectUl.innerHTML += `
        <li>
          <article class="showcase-list container container-center ">
              <h1>${project.title}</h1>
              <small>${project.date}</small>
              <p>${project.content}</p>
              <a class="link link-primary" href="${project.liveLink}">Live Project</a>
              <a class="link link-secondary"
                  href="${project.codeLink}">View Source</a>
  
          </article>
        </li>
        `;
  });
});
