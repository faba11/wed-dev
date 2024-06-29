//This will remove all the content in the document when you click keyboard 
/*document.addEventListener('keypress', function(event) {
    document.body.remove();
});*/


//This will change element when click on mouse 
function onclick() {
    let heading = document.querySelector('h1');
    heading.style.backgroundColor = 'yellow';

    let listElements = this.querySelectorAll('li');
    for (let i = 0; i < listElements.length; i++) {
        if (listElements[i].textContent === 'Feedback') {
            listElements[i].style.backgroundColor = 'green';
        } else if (listElements[i].textContent === 'contact') {
            listElements[i].style.backgroundColor = 'purple';
        } else {
            listElements[i].style.backgroundColor = 'red';
        }
    }
    let image = document.createElement('img');
    image.src = 'https://fastly.picsum.photos/id/69/500/500.jpg?hmac=Yy0TZMsvfneh3zFqRAITH1q2JXAeOglipT_y4I9J3rM';
    document.body.appendChild(image);

    //How to remove addEvenListener
    document.removeEventListener('click', onclick);
};

document.addEventListener('click', onclick);