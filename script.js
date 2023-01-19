function addLike(element){
    var likes = document.querySelector(`#${element}`)
    likes.innerText++;
}

var popup = document.querySelector('#popup');

function signUPpop(){
    popup.style.display = 'block';
}

function exitPopup(){
    if (popup.style.display == 'block')
    popup.style.display = 'none';
}