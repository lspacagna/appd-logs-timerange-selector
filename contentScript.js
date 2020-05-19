document.addEventListener("mousedown", function(event){

  var target = event.target || event.srcElement;

  // If right clicked
  if(event.button === 2 && target.className == "ui-grid-view-cell-content ng-binding"){
    console.log(event)
    console.log(target.innerHTML)

    // console.log(target.parentNode)
    //
    // var ancestor = findAncestor(target, "ui-grid-cell")
    // console.log(ancestor)
    //
    //
    // var next = ancestor.nextSibling.nextSibling;
    //
    // console.log(next)
  }

    // var selection = window.getSelection().toString();
    // if(selection.match(/^10\./)) {
    //     chrome.extension.sendRequest({cmd: "create_menu"});
    // } else {
    //     chrome.extension.sendRequest({cmd: "delete_menu"});
    // }
}, true);


// function findAncestor (el, cls) {
//     while ((el = el.parentElement) && !el.classList.contains(cls));
//     return el;
// }
