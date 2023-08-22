// example code
/*
window.hook = { secret : "yes" };
window.key = hideHook(hook)

window.getSecret = () => {
  return document.getElementById(key).hook.secret
}
*/
function hideHook (hook) {
    let obContainer = document.createElement('span');
    let obElement = document.createElement('span');
    obKey = Math.random();
    obElement.id = window.obKey.toString(); // Convert to string, as IDs are strings
    obContainer.appendChild(obElement);
    document.body.appendChild(obContainer);
    document.getElementById(obKey).hook = hook
    delete obElement;
    delete obContainer;
    return obKey
}
