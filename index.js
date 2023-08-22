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
    let obKey = Math.random().toString(36).substring(2, 15); // Generate a more complex key
    obElement.id = obKey;
    obContainer.style.display = 'none'; // Hide the container
    obContainer.appendChild(obElement);
    document.body.appendChild(obContainer);
    document.getElementById(obKey).hook = hook;
    return obKey;
}
