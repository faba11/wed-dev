const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);//convert the JSON string to objct
console.log(jsonString);
console.log(jsonObject)

const jsonObj = {
    name: 'John',
    age: 30
}
const jsonStr = JSON.stringify(jsonObj);//convert object to JSON 

console.log(jsonObj);
console.log(jsonStr)