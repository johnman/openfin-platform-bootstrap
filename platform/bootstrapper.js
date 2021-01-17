import { getSnapshot } from "../js/store.js";
import { getSnapshot as defaultSnapshot } from "../js/defaultSetup.js";

async function init() {
  console.log("Init called.");

  console.log("Getting latest snapshot");
  let snapshotToLoad = await getSnapshot();

  if (snapshotToLoad === undefined || snapshotToLoad === null) {
    console.log("No saved snapshot. Loading default.");
    snapshotToLoad = await defaultSnapshot();
  }

  const platform = await fin.Platform.getCurrent();

  return platform.applySnapshot(snapshotToLoad, {
    closeExistingWindows: true
  });
}

window.addEventListener("DOMContentLoaded", () => {
  let platform = fin.Platform.getCurrentSync();
  platform.once("platform-api-ready", init.bind(this));
});
