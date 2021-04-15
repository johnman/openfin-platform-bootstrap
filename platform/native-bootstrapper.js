async function init() {
  console.log("Platform initialised. Native code will do the driving.");
}

window.addEventListener("DOMContentLoaded", () => {
  let platform = fin.Platform.getCurrentSync();
  platform.once("platform-api-ready", init.bind(this));
});
