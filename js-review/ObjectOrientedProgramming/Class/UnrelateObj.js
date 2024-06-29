let bird = {
    name: "Tweety",
    color: "blue",
    numLegs: 4
};

let airPlane = {
    make: "Boeing",
    model: "737-800",
    year: 2019,
};

let flyAir = function(obj) {
    obj.fly = function() {
        console.log("Flying");
    }
};

flyAir(bird);
flyAir(airPlane);

airPlane.fly();
bird.fly();