export const strToDom = str => {
  const oDiv = document.createElement('div');
  oDiv.innerHTML = str;
  return oDiv.children[0];
}