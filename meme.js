window.onload = function(){

var memeCanvas = document.getElementById('meme-canvas');
var topText = document.getElementById('top-text');
var bottomText = document.getElementById('bottom-text');
var imgUrl = document.getElementById('img-url');
var makeMeme = document.getElementById('make-meme');

canvas.width = canvas.height = 0;

ctx = canvas.getContext('2d');


function generateMeme(img, top, bottom){
    canvas.height = img.height;
    canvas.width = img.width;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
}

makeMeme.addEventListener('click', function () {
    let reader = new FileReader();
    reader.onload = function () {
        let img = new Image;
        img.src = reader.result;
        makeMeme(img, topText, bottomText);
    }
    reader.readAsDataURL(imgUrl);
});

}