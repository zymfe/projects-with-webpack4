import { strToDom } from '../utils/index';
import 'regenerator-runtime/runtime';

function getUserInfo () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        name: 'zymfe',
        age: 20
      });
    });
  });
}

window.init = async function () {
  const userInfo = await getUserInfo();
  console.log(userInfo);
  
  const data = {
    name: 'zym', 
    age: 18,
    skill: ['HTML', 'CSS', 'JavaScript', 'Node']
  }
  const tpl = require('./index.ejs')(data);
  document.body.appendChild(strToDom(tpl));
}
 
init();
