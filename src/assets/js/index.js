const urlUser = 'https://api.github.com/users/Neryes1';
const urlRepo = 'https://api.github.com/users/Neryes1/repos';
let userData = null;
let userInfoTab = null;

const getUserData = async () => {
  try {
    if (userData) {
      return userData;
    }
    else {
      const req = await fetch(urlUser);
      userData = await req.json();
      return userData;
    }
  }
  catch (e) {
    console.log('Falha na requisição', e);
  }
}

const getUserRepo = async () => {

  try {
    if (userInfoTab) {
      return userInfoTab;
    }
    else {
      const req = await fetch(urlRepo);
      userInfoTab = await req.json();
    }
    return userInfoTab;
  }
  catch (e) {
    console.log('Falha na requisição', e);
  }
}

const tabMenu = async () => {
  const userData = await getUserData();
  const userInfoTab = await getUserRepo();
  let counter = 0;

  const tab = document.querySelector('.tab');

  try {
    // build tab
    let reposLink = document.createElement('a');
    reposLink.setAttribute('href', '#');
    reposLink.setAttribute('class', 'repos-tab active');
    reposLink.innerHTML = 'Repos';
    let reposSpan = document.createElement('span');
    reposSpan.setAttribute('class', 'tab-num');
    reposSpan.textContent = userData.public_repos;

    let starredLink = document.createElement('a');
    starredLink.setAttribute('href', '#');
    starredLink.setAttribute('class', 'starred-tab');
    starredLink.innerHTML = 'Starred';
    let starredSpan = document.createElement('span');
    starredSpan.setAttribute('class', 'tab-num');

    userInfoTab.forEach(item => {
      counter += item.stargazers_count;
    })

    starredSpan.textContent = counter;

    // check if userData is loaded
    if (userData !== null && userData !== undefined) {
      // if there is repository 
      if (!(userData.public_repos.length < 1)) {
        reposLink.appendChild(reposSpan);
      }
    }

    // condition to avoid null 
    if (counter > 0) {
      starredLink.appendChild(starredSpan);
    }

    const tabLine = document.createElement('div');
    tabLine.setAttribute('class', 'tab-line')

    tab.appendChild(reposLink);
    tab.appendChild(starredLink);
    tab.appendChild(tabLine);

    toggleActiveMenu(tab);

    // tab parameter to use active class
    return createPanelUser(tab);

  } catch (e) {
    console.log('Falha na requisição', e);
  }
}

/**
 * function that loads user profile data
 */
const createDataUserProfile = async () => {
  const userData = await getUserData();

  const imgProfile = document.querySelector('.img-profile');
  const userInfoDiv = document.querySelector('.user-info');

  let imgUser = document.createElement('img');
  let userName = document.createElement('h4');
  userName.setAttribute('class', 'user-name');
  let userBio = document.createElement('span');;
  userBio.setAttribute('class', 'user-bio');

  try {
    imgUser.setAttribute('src', userData.avatar_url);
    userName.textContent = userData.login;
    userBio.textContent = userData.bio;

    imgProfile.appendChild(imgUser);
    userInfoDiv.appendChild(userName);
    userInfoDiv.appendChild(userBio);
  }
  catch (e) {
    console.log('Falha na requisição', e);
  }
}

const createUserElements = async () => {

  const userInfo = await getUserRepo();

  const userProfile = document.querySelector('.user-profile');

  const imgProfile = document.createElement('div');
  imgProfile.setAttribute('class', 'img-profile');
  const img = document.createElement('img');
  img.setAttribute('src', userInfo.owner.avatar_url);

  imgProfile.appendChild(img);
  userProfile.appendChild(imgProfile);
}

/**
 * function to create repositories info
 */
const createPanelUser = async (tabHTML) => {
  const cardProjects = document.querySelector('.card-projects');
  cardProjects.textContent = '';

  const repoInfo = await getUserRepo();
  const activeTab = tabHTML.querySelector('.active');

  repoInfo.forEach(item => {
    const li = document.createElement('li');
    li.setAttribute('class', 'project');

    const divLine = document.createElement('div');
    divLine.setAttribute('class', 'card-line');

    const projectInfo = document.createElement('div');
    projectInfo.setAttribute('class', 'project-info');

    const projectName = document.createElement('a');
    projectName.setAttribute('class', 'project-name');
    projectName.setAttribute('href', `${item.html_url}`);
    projectName.innerHTML = `${item.name}`;

    const projectDescription = document.createElement('p');
    projectDescription.setAttribute('class', 'project-description');
    if (item.description != null) {
      projectDescription.innerText = `${item.description}`;
    }

    const detailsProject = document.createElement('div');
    detailsProject.setAttribute('class', 'details-project');
    detailsProject.innerHTML = `
        <a href="${item.stargazers_url}"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star UnderlineNav-octicon">
        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
        </svg><span>${item.stargazers_count}</span></a>

        <a href="${item.forks_url}"><svg aria-label="forks" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
        </svg><span>${item.forks_count}</span></a>
    `;

    projectInfo.appendChild(projectName);
    projectInfo.appendChild(projectDescription);

    li.appendChild(projectInfo);
    li.appendChild(detailsProject);
    li.appendChild(divLine);

    // Verifica se a aba ativa é "Starred" e se o item tem stargazers_count > 0
    if (activeTab.classList.contains('starred-tab') && item.stargazers_count > 0) {
      cardProjects.appendChild(li);
    }
    // Verifica se a aba ativa é "Repos"
    else if (activeTab.classList.contains('repos-tab')) {
      cardProjects.appendChild(li);
    }
  });
}


/**
 * function to toggle the active menu
 */
const toggleActiveMenu = () => {
  const links = document.querySelectorAll('.tab a');

  if (links) {
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        const tab = document.querySelector('.tab');
        links.forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
        createPanelUser(tab);
      })
    })
  }
}


/**
 * search function
 */
const search = () => {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
    const projectName = project.querySelector('.project-name').textContent.toLowerCase();
    if (projectName.includes(searchTerm)) {
      project.classList.add('show');
      project.classList.remove('hide');
    } else {
      project.classList.add('hide');
      project.classList.remove('show');
    }
  });
};



/**
 * validation to run when hit Enter
 */
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      search();
    }
  })
}

createDataUserProfile();
tabMenu();

search();