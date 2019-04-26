window.init = function () {
  var data = {
    name: 'zym', 
    age: 18,
    skill: ['HTML', 'CSS', 'JavaScript']
  }
  var tpl = require('./index.ejs')(data);
  document.body.innerHTML = tpl;
}

init();
