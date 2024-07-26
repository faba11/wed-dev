// fetch('https://api.example.com/data', {
//     method: 'POST',
//     headers: {
//         'content-Type': 'application/json'
//     },
//     body: JSON.stringify({ name: 'john', age: 30 })
// })
//     .then(res => { res.json() }).then(data => {
//         console.log(data)
//     }).catch(error => {
//         console.error(error)
//     })

let dataObj = {
    name: 'John',
    age: 30,
    city: 'New York',
    nationality: 'USA'
}

fetch('https://api/example.com', {
    method: 'POST',
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify(dataObj)
})
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok')
        }
        return res.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('An error occurred:', error);
    })