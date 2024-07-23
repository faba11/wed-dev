// import { reject } from "lodash";

// import { forEach } from "lodash"


function promiseFunc() {
    let data = [
        {
            "Name": "Emily Johnson",
            "PhoneNumber": "+44 7911 123456",
            "ID": "EJ98765",
            "Age": 29,
            "Nationality": "British"
        },
        {
            "Name": "Samuel Brown",
            "PhoneNumber": "+44 7700 987654",
            "ID": "SB54321",
            "Age": 34,
            "Nationality": "American"
        },
        {
            "Name": "Aisha Patel",
            "PhoneNumber": "+44 7888 555666",
            "ID": "AP11223",
            "Age": 25,
            "Nationality": "Indian"
        },
        {
            "Name": "Liam Williams",
            "PhoneNumber": "+44 7555 444555",
            "ID": "LW67890",
            "Age": 42,
            "Nationality": "Australian"
        },
        {
            "Name": "Chloe Smith",
            "PhoneNumber": "+44 7912 345678",
            "ID": "CS33445",
            "Age": 31,
            "Nationality": "Canadian"
        }
    ]

    return new Promise((resolve, reject) => {
        let found = false;

        for (let person of data) {

            if (person.Nationality == 'British') {
                console.log(person)
                found = true;
                break;
            }
        }
        if (found) {
            resolve('resolve')
        } else {
            reject('No British in the data')
        }
    })

}



promiseFunc().then((resolveMessage) => {
    console.log(resolveMessage)
}).catch((error) => {
    console.log(error)
})

