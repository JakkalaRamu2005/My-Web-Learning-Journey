// let textEl = document.getElementsByTagName("h1")[0];
// let btnEl = document.getElementsByTagName("button")[0];

/* function editText(){
    let textContent = textEl.textContent;



    const input = document.createElement('input');
    input.type = "text";
    input.value = textContent;
    textEl.replaceWith(input);

    btnEl.textContent = "save";

    btnEl.onclick = function(){

        const newText = input.value;
        if(newText!==""){
            textEl.textContent = newText;
            input.replaceWith(textEl);
            btnEl.textContent = "edit";

            btnEl.onclick = editText;
        }

    }
}

button.onclick=editText; */

/* btnEl.onclick = function(){

   textEl.contentEditable = true;
   btnEl.textContent = "save";

   btnEl.onclick = function(){
    textEl.contentEditable="false";
    btnEl.textContent = "edit";
   }
}
 */

let textEl = document.getElementById("myText");
let editBtn = document.getElementById("editBtn");
let cancelBtn = document.getElementById("cancelBtn");

let oldValue = ""; // to remember old text

// When Edit is clicked
editBtn.onclick = function() {
    oldValue = textEl.textContent;       // save current text
    textEl.contentEditable = true;       // allow editing
    textEl.focus();                       // put cursor in the text
    editBtn.textContent = "Save";         // change button text
    cancelBtn.style.display = "inline";  // show cancel button

    // When Save is clicked
    editBtn.onclick = function() {
        textEl.contentEditable = false;  // stop editing
        editBtn.textContent = "Edit";    // back to Edit button
        cancelBtn.style.display = "none";// hide Cancel
        // re-attach original Edit function
        editBtn.onclick = arguments.callee.caller;
    }
}

// When Cancel is clicked
cancelBtn.onclick = function() {
    textEl.textContent = oldValue;       // restore old text
    textEl.contentEditable = false;      // stop editing
    editBtn.textContent = "Edit";        // back to Edit
    cancelBtn.style.display = "none";    // hide Cancel
}

