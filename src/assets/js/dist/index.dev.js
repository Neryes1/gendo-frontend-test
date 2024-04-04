"use strict";

var urlUser = 'https://api.github.com/users/Neryes1';
var urlRepo = 'https://api.github.com/users/Neryes1/repos';
var userData = null;
var userInfoTab = null;

var getUserData = function getUserData() {
  var req;
  return regeneratorRuntime.async(function getUserData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (!userData) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", userData);

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(fetch(urlUser));

        case 7:
          req = _context.sent;
          _context.next = 10;
          return regeneratorRuntime.awrap(req.json());

        case 10:
          userData = _context.sent;
          return _context.abrupt("return", userData);

        case 12:
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.log('Falha na requisição', _context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

var getUserRepo = function getUserRepo() {
  var req;
  return regeneratorRuntime.async(function getUserRepo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          if (!userInfoTab) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", userInfoTab);

        case 5:
          _context2.next = 7;
          return regeneratorRuntime.awrap(fetch(urlRepo));

        case 7:
          req = _context2.sent;
          _context2.next = 10;
          return regeneratorRuntime.awrap(req.json());

        case 10:
          userInfoTab = _context2.sent;

        case 11:
          return _context2.abrupt("return", userInfoTab);

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          console.log('Falha na requisição', _context2.t0);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

var tabMenu = function tabMenu() {
  var userData, userInfoTab, counter, tab, hrElement, reposLink, reposSpan, starredLink, starredSpan;
  return regeneratorRuntime.async(function tabMenu$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(getUserData());

        case 2:
          userData = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap(getUserRepo());

        case 5:
          userInfoTab = _context3.sent;
          counter = 0;
          tab = document.querySelector('.tab');
          _context3.prev = 8;
          // build tab
          reposLink = document.createElement('a');
          reposLink.setAttribute('href', '#');
          reposLink.setAttribute('class', 'repos-tab active');
          reposLink.innerHTML = 'Repos';
          reposSpan = document.createElement('span');
          reposSpan.setAttribute('class', 'tab-num');
          reposSpan.textContent = userData.public_repos;
          starredLink = document.createElement('a');
          starredLink.setAttribute('href', '#');
          starredLink.setAttribute('class', 'starred-tab');
          starredLink.innerHTML = 'Starred';
          starredSpan = document.createElement('span');
          starredSpan.setAttribute('class', 'tab-num');
          userInfoTab.forEach(function (item) {
            counter += item.stargazers_count;
          });
          starredSpan.textContent = counter; // check if userData is loaded

          if (userData !== null && userData !== undefined) {
            // if there is repository 
            if (!(userData.public_repos.length < 1)) {
              reposLink.appendChild(reposSpan);
            }
          } // condition to avoid null 


          if (counter > 0) {
            starredLink.appendChild(starredSpan);
          }

          hrElement = document.createElement('hr'); // Defina hrElement aqui

          tab.appendChild(reposLink);
          tab.appendChild(starredLink);
          tab.appendChild(hrElement);
          toggleActiveMenu(tab); // tab parameter to use active class

          return _context3.abrupt("return", createPanelUser(tab));

        case 34:
          _context3.prev = 34;
          _context3.t0 = _context3["catch"](8);
          console.log('Falha na requisição', _context3.t0);

        case 37:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[8, 34]]);
};
/**
 * function that loads user profile data
 */


var createDataUserProfile = function createDataUserProfile() {
  var userData, imgProfile, userInfoDiv, imgUser, userName, userBio;
  return regeneratorRuntime.async(function createDataUserProfile$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(getUserData());

        case 2:
          userData = _context4.sent;
          imgProfile = document.querySelector('.img-profile');
          userInfoDiv = document.querySelector('.user-info');
          imgUser = document.createElement('img');
          userName = document.createElement('h4');
          userName.setAttribute('class', 'user-name');
          userBio = document.createElement('span');
          ;
          userBio.setAttribute('class', 'user-bio');

          try {
            imgUser.setAttribute('src', userData.avatar_url);
            userName.textContent = userData.login;
            userBio.textContent = userData.bio;
            imgProfile.appendChild(imgUser);
            userInfoDiv.appendChild(userName);
            userInfoDiv.appendChild(userBio);
          } catch (e) {
            console.log('Falha na requisição', e);
          }

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var createUserElements = function createUserElements() {
  var userInfo, userProfile, imgProfile, img;
  return regeneratorRuntime.async(function createUserElements$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(getUserRepo());

        case 2:
          userInfo = _context5.sent;
          userProfile = document.querySelector('.user-profile');
          imgProfile = document.createElement('div');
          imgProfile.setAttribute('class', 'img-profile');
          img = document.createElement('img');
          img.setAttribute('src', userInfo.owner.avatar_url);
          imgProfile.appendChild(img);
          userProfile.appendChild(imgProfile);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  });
};
/**
 * function to create repositories info
 */


var createPanelUser = function createPanelUser(tabHTML) {
  var cardProjects, repoInfo, activeTab;
  return regeneratorRuntime.async(function createPanelUser$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          cardProjects = document.querySelector('.card-projects');
          cardProjects.textContent = '';
          _context6.next = 4;
          return regeneratorRuntime.awrap(getUserRepo());

        case 4:
          repoInfo = _context6.sent;
          activeTab = tabHTML.querySelector('.active');
          repoInfo.forEach(function (item) {
            var li = document.createElement('li');
            li.setAttribute('class', 'project');
            var projectInfo = document.createElement('div');
            projectInfo.setAttribute('class', 'project-info');
            var projectName = document.createElement('a');
            projectName.setAttribute('class', 'project-name');
            projectName.setAttribute('href', "".concat(item.html_url));
            projectName.innerHTML = "".concat(item.name);
            var projectDescription = document.createElement('p');
            projectDescription.setAttribute('class', 'project-description');

            if (item.description != null) {
              projectDescription.innerText = "".concat(item.description);
            }

            var detailsProject = document.createElement('div');
            detailsProject.setAttribute('class', 'details-project');
            detailsProject.innerHTML = "\n        <a href=\"".concat(item.stargazers_url, "\"><svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-star UnderlineNav-octicon\">\n        <path d=\"M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z\"></path>\n        </svg><span>").concat(item.stargazers_count, "</span></a>\n\n        <a href=\"").concat(item.forks_url, "\"><svg aria-label=\"forks\" role=\"img\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-repo-forked\">\n        <path d=\"M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z\"></path>\n        </svg><span>").concat(item.forks_count, "</span></a>\n    ");
            projectInfo.appendChild(projectName);
            projectInfo.appendChild(projectDescription);
            li.appendChild(projectInfo);
            li.appendChild(detailsProject); // Verifica se a aba ativa é "Starred" e se o item tem stargazers_count > 0

            if (activeTab.classList.contains('starred-tab') && item.stargazers_count > 0) {
              cardProjects.appendChild(li);
            } // Verifica se a aba ativa é "Repos"
            else if (activeTab.classList.contains('repos-tab')) {
                cardProjects.appendChild(li);
              }
          });

        case 7:
        case "end":
          return _context6.stop();
      }
    }
  });
};
/**
 * function to toggle the active menu
 */


var toggleActiveMenu = function toggleActiveMenu() {
  var links = document.querySelectorAll('.tab a');

  if (links) {
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var tab = document.querySelector('.tab'); // Correção: selecionando a div tab

        links.forEach(function (l) {
          return l.classList.remove('active');
        });
        e.target.classList.add('active');
        createPanelUser(tab);
      });
    });
  }
};
/**
 * search function
 */


var search = function search() {
  var searchTerm = document.getElementById('searchInput').value.toLowerCase();
  var projects = document.querySelectorAll('.project');
  projects.forEach(function (project) {
    var projectName = project.querySelector('.project-name').textContent.toLowerCase();

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


var searchInput = document.getElementById('searchInput');

if (searchInput) {
  searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      search();
    }
  });
}

createDataUserProfile();
tabMenu();
search();