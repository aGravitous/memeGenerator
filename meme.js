// Styling notes: add scrollbar to results
// Add delete to images
// Get words in the right place.


window.onload = function(){

// Get information from page.

var topText = document.getElementById('top-text');
var bottomText = document.getElementById('bottom-text');
var imgUrl = document.getElementById('img-url');
var form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    var HTMLtoAppend = `
    <div class="meme">
        <span>${topText.value}</span>
        <img src="${imgUrl.value}" alt="Your Image"></img>
        <span>${bottomText.value}</span>
    </div>
    `;
    var button = document.createElement('button');
    button.innerText = "Remove me!";
    button.addEventListener('click', function(event){
        event.target.parentElement.remove()
    })
    var newDiv = document.createElement('div');

    newDiv.innerHTML = HTMLtoAppend;
    newDiv.append(button);
    document.getElementById('item3').append(newDiv);
});

// This last curly bracket is for onload!
}