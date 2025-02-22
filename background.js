// A generic onclick callback function.
function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}

// Create one test item for each context type.

  var title = "Set Timerange";
  var id = chrome.contextMenus.create({"title": title, "contexts":["selection"],
                                       "onclick": genericOnClick});
  console.log("selection item:" + id);
