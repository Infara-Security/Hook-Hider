# Hook-Hider
makes patching our hooks slightly more painful

## Usage :
```
window.hook = { secret : "yes" };
window.key = hideHook(hook, "pass123")

window.getHook = () => {
  return document.getElementById(key)[' '](key, "pass123")
}
```
