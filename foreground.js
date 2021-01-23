

function validateText() {
    text = ""

    console.log("valid running")
    text = document.getSelection().toString()

    if (text == "yes") {
        alert("message")
    }else if (text == "sure") {
        alert("message")
    }
}

// Validate the selected text

// Run conversion operation after text has been validated

// Output the information to the user in some form

// Listen for mouse up
document.onmouseup = validateText