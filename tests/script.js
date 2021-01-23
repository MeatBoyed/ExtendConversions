var t = '';
function gText(e) {

    // Set t to the current selection
    t = document.getSelection();
    console.log("getting selection no range")
    console.log(document.getSelection())

    // Setting the selected text into the Input text field
    document.getElementById('input').value = t;
}

// On mouse up calls the gText function
document.onmouseup = gText;

// if (!document.all) {
//     document.captureEvents(Event.MOUSEUP);
// }