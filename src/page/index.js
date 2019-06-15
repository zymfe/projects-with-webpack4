require('./index.less');

import { strToDom } from '../utils/index';

const cookie = require('static/js/cookie.js');
// cookie.set({
//   name: 'uname',
//   value: 'zymfe',
//   expires: 5000,
//   path: '/',
//   domain: '127.0.0.1'
// });


// console.log('MODE: ', MODE);
// console.log('ENV: ', ENV);

function getUserInfo () {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/user', true);
    xhr.onload = e => {
      resolve(xhr.response);
    }
    xhr.onerror = e => {
      resolve(e);
    }
    xhr.send();
  });
}

function getProjectInfo () {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/app/project', true);
    xhr.onload = e => {
      resolve(xhr.response);
    }
    xhr.send();
  });
}

window.init = async function () {
  const userInfo = await getUserInfo();
  console.log(userInfo);

  const projectInfo = await getProjectInfo();
  console.log(projectInfo);
  
  const data = {
    name: 'zym', 
    age: 18,
    skill: ['HTML', 'CSS', 'JavaScript', 'Node']
  }
  const tpl = require('./index.ejs')(data);
  document.body.appendChild(strToDom(tpl));
}
 
init();
