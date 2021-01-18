function init() {
  let button = document.getElementById("login");
  button.onclick = () => {
    window.location.href = "/platform/provider.html";
  };
}

window.addEventListener("DOMContentLoaded", () => {
  init();
});
