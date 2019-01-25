// Styling notes: add scrollbar to results
// Get words in the right place.
// Fix background of personal page.


window.onload = function(){

// Get information from page.

var topText = document.getElementById('top-text');
var bottomText = document.getElementById('bottom-text');
var imgUrl = document.getElementById('img-url');
var form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    // Create html to hold image and words.
    var HTMLtoAppend = `
    <div class="meme">
        <span id="top-words">${topText.value}</span>
        <img src="${imgUrl.value}" alt="Your Image"></img>
        <span id="bottom-words">${bottomText.value}</span>
    </div>
    `;
    // Create button for self delete.
    var button = document.createElement('button');
    button.innerText = "Remove the above!";
    button.classList.add('button');
    button.addEventListener('click', function(event){
        event.target.parentElement.remove()
    })
    // Append button and add html and button back to page.
    var newDiv = document.createElement('div');
    newDiv.innerHTML = HTMLtoAppend;
    newDiv.append(button);
    document.getElementById('item3').append(newDiv);
});

// This last curly bracket is for onload!
}