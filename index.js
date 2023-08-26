function hideHook (hook, pass) {
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
    let obKey = generateSecureKey(32) // 32 characters ( change to make more complex )
    obElement.id = obKey;
    obContainer.style.display = 'none'; // Hide the container
    obContainer.appendChild(obElement);
    document.body.appendChild(obContainer);
    document.getElementById(obKey)[' '] = (password) => {
        if(password == pass) {
          return hook
        } else {
          return {}
        }
    };
    return obKey;
}
