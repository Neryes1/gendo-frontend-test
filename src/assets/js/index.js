const urlUser = 'https://api.github.com/users/Neryes1';
const urlRepo = 'https://api.github.com/users/Neryes1/repos';

const getUserData = async () => {
  try {
    const req = await fetch(urlUser);
    const data = req.json();
    return data;
  }
  catch (e) {
    console.log('Falha na requisição', e);
  }
}

const createDataUser = async () => {
  const userInfo = await getUserData();

  const imgProfile = document.querySelector('.img-profile');
  const userInfoDiv = document.querySelector('.user-info');

  let imgUser = document.createElement('img');
  let userName = document.createElement('h4');
  userName.setAttribute('class', 'user-name');
  let userBio = document.createElement('span');;
  userBio.setAttribute('class', 'user-bio');

  try{
    imgUser.setAttribute('src', userInfo.avatar_url);
    userName.textContent = userInfo.login;
    userBio.textContent = userInfo.bio;

    imgProfile.appendChild(imgUser);
    userInfoDiv.appendChild(userName);
    userInfoDiv.appendChild(userBio);
  }
  catch(e){
    console.log('Falha na requisição', e);
  }
}

const getUserRepo = async () => {

  try {
    const req = await fetch(urlRepo);
    const data = await req.json();

    return data;
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

const createPanelUser = async () => {

  const cardProjects = document.querySelector('.card-projects');
  const userInfo = await getUserRepo();

  userInfo.forEach(item => {

    //console.log(item.name)

    const li = document.createElement('li');
    li.setAttribute('class', 'project');

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
    cardProjects.appendChild(li);

  });

  return cardProjects;

}

//createUserElements();
createDataUser();
createPanelUser();