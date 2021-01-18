if (window !== window.top || window.fin === undefined) {
  return;
}

let providerWindow = fin.Window.getCurrentSync();
if (window.location.href.indexOf("provider.html") === -1) {
  providerWindow.show(true).then((_) => {
    console.log("Window shown.");
  });
} else {
  providerWindow.hide().then((_) => {
    console.log("Window hidden.");
  });
}
