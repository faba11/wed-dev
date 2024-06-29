let data = [
    { "id": 1, "first_name": "Micaela", "last_name": "Papaminas", "email": "mpapaminas0@comsenz.com", "gender": "Polygender", "ip_address": "57.96.250.239" },
    { "id": 2, "first_name": "Marlow", "last_name": "Goldring", "email": "mgoldring1@cafepress.com", "gender": "Genderfluid", "ip_address": "20.19.162.45" },
    { "id": 3, "first_name": "Marleah", "last_name": "Paddison", "email": "mpaddison2@shutterfly.com", "gender": "Female", "ip_address": "244.22.190.176" },
    { "id": 4, "first_name": "Corine", "last_name": "Duchart", "email": "cduchart3@indiatimes.com", "gender": "Female", "ip_address": "225.5.71.184" },
    { "id": 5, "first_name": "Ulrich", "last_name": "Goldsworthy", "email": "ugoldsworthy4@marriott.com", "gender": "Male", "ip_address": "173.217.141.26" },
    { "id": 6, "first_name": "De", "last_name": "Cullon", "email": "dcullon5@macromedia.com", "gender": "Female", "ip_address": "249.215.162.201" },
    { "id": 7, "first_name": "Edmon", "last_name": "Ponsford", "email": "eponsford6@taobao.com", "gender": "Male", "ip_address": "25.243.225.56" },
    { "id": 8, "first_name": "Lilah", "last_name": "Rossiter", "email": "lrossiter7@xinhuanet.com", "gender": "Female", "ip_address": "246.29.225.191" },
    { "id": 9, "first_name": "Stacy", "last_name": "Rother", "email": "srother8@chronoengine.com", "gender": "Male", "ip_address": "75.204.203.157" },
    { "id": 10, "first_name": "Hamel", "last_name": "Tenaunt", "email": "htenaunt9@mashable.com", "gender": "Male", "ip_address": "62.183.226.194" }
]

let gendes = data.map(({ first_name: name, gender: genders, }) => ({ name, genders }));


console.log(JSON.stringify(gendes));