fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'john', age: 30 })
})
    .then(res => { res.json() }).then(data => {
        console.log(data)
    }).catch(error => {
        console.error(error)
    })  