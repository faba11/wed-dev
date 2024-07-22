
let baseUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos';
function getPhotos() {
    return new Promise((resolve, reject) => {
        fetch(baseUrl).then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
            .then(data => {
                const promises = data.map(element => {

                    return new Promise((resolveImage) => {
                        setTimeout(() => {
                            let imageUrl = element.url;
                            let img = document.createElement('img');
                            img.src = imageUrl;
                            img.alt = element.title;
                            document.querySelector('.container').appendChild(img);
                            resolveImage();
                        }, delay())
                    });
                });
                return Promise.all(promises);
            })
            .catch(error => {
                console.Error(`Error loading photos: ${error}`)
                reject(error)
            })
    })
}

// Display photos on page
function displayPhotos() {
    return getPhotos();
}

displayPhotos()
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    });

//Make a delay function to simulate a 2 second delay
function delay() {
    return 2000;
}