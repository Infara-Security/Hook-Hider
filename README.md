# Hook-Hider
makes patching our hooks slightly more painful

## Usage :
```
window.hook = { secret : "yes" };
window.key = hideHook(hook)

window.getHook = () => {
  return document.getElementById(key)[' '](key)
}
```
