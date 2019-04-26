import { strToDom } from '../utils/index';

window.init = function () {
  const data = {
    name: 'zym', 
    age: 18,
    skill: ['HTML', 'CSS', 'JavaScript', 'Node']
  }
  const tpl = require('./index.ejs')(data);
  document.body.appendChild(strToDom(tpl));
}
 
init();
