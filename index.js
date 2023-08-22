// example code
/*
window.hook = { secret : "yes" };
window.key = hideHook(hook)

window.getHook = () => {
  return document.getElementById(key)[' '](key)
}
*/
function hideHook (hook) {
    function generateSecureKey(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    let obContainer = document.createElement('span');
    let obElement = document.createElement('span');
    let obKey = generateSecureKey(32)
    obElement.id = obKey;
    obContainer.style.display = 'none'; // Hide the container
    obContainer.appendChild(obElement);
    document.body.appendChild(obContainer);
    document.getElementById(obKey)[' '] = (pass) => {
        if(pass == obKey) {
          return hook
        } else {
          return {}
        }
    };
    return obKey;
}
