async function init() {
  const view = await fin.View.getCurrent();

  view.prependListener("hidden", function (event) {
    console.log("The View was hidden.");
    localStorage.setItem("hidden", true);
  });

  view.prependListener("destroyed", function (event) {
    console.log("The View was destroyed via prependlistener.");
    localStorage.setItem("destroyed", true);
  });

  // Alternative approach without getting a reference to view directly.
  fin.me.prependListener("hidden", function (event) {
    console.log("The View was hidden!");
  });

  console.log("View initialised");
}

init();
