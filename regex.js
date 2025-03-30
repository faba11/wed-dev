let text = 'LorerE12343&^?/hth..  ertet[[[etHelloooo\nFaba.TbSra...sdsdsd';
let m = text.match(/\d/g)

console.log(m);

console.log(text.match(/\w/g));
console.log(text.match(/[a-zA-Z]/g))//range from a-z and A-Z. 
console.log(text.match(/b/g))//get all b from the allowing string
console.log(text.match(/\[/g))//
cl