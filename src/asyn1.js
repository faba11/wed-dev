
async function obj(name, targetElement) {



    try {

        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
            throw new Error('fail to fetch data')
        }
        const data = await res.json();
        let foundUser = data.find(user => user.name == name);

        if (foundUser) {
            setTimeout(() => {
                targetElement.innerHTML = foundUser.name;
                console.log(foundUser)
            }, 3000)
        } else {
            setTimeout(() => {
                targetElement.innerHTML = 'Name is not found'
            }, 3000)

        }
    } catch {
        console.error(error)
    }

}

const resultElement = document.createElement('p');
document.querySelector('div').appendChild(resultElement);
obj('Ervin Hoswell', resultElement);