// Lesson 7 Exercises-functions

// 7a, create a function call greet that display the message 'Hello'
// in the console
// call/run this function a few times using: greet();

function greet7A() {
  console.log("Hello");
}

greet7A();

// 7b/ continuing fromn 7a,
//  add a parameter call name tot he greet function and display  Hello name
// call the function a few times with diffrent names
function greet7b(name) {
  console.log(`Hello ${name}`);
}

greet7b("Faba");
greet7b("Simon");

// 7c. Try to calling greet7b() without a name (it will display Hello undefined).
// Modify the function so that if name is undefined, it will display 'Hi there instead

function greet7c(name) {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log("Hi there");
  }
}
greet7c("Traore");
greet7c();

// 7d. Create a function convertTofahrenheit(celsius)
// That takes a number in degree celsius and return a number in degreen fahrenheit.
// .formula: fahreheit = (celsius * 9 / 5) +32
// .convertToCelsius(86) => 25

function func7d(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(func7d(25));

// 7e. Create a function convertToCelsius(fahrenheit)
// That takes a number in degree celsius and return a number in degreen celsius.
// .formula: celsius = (fahrenheit - 32) * 5 / 9
// .convertToCelsius(86) => 25

function func7e(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log(func7e(86));

// 7f. Create a function convertToTemperature(degree, unit)
// That takes a number and unit (c or f) and convert it info the other unit.
// .convertToTemperature(25, c) => '77F'
// .convertToTemperature(86, f) => '30C'

function func7f(degree, unit) {
  if (unit == "c") {
    return `${(degree * 9) / 5 + 32}C`;
  } else if (unit == "f") {
    return `${((degree - 32) * 5) / 9}C`;
  } else {
    return "Inval unit";
  }
}

console.log(func7f(25, "c"));
console.log(func7f(86, "f"));

// 7g. Create a function convertLength(length, from, to) that takes a
// number and uint (km or miles) 1 mile = 1.6 km
// .convertLength(10, km, km) => 80
// .convertLength(10, km, miles) => 20
// .convertLength(10, miles, km) => 50

function convertLength(length, from, to) {
  const convertsionFactor = {
    km: {
      km: 1,
      mile: 0.6213,
    },
    mile: {
      mile: 1,
      km: 1.60934,
    },
  };

  // Trim and normalize the units
  from = from.trim().toLowerCase();
  to = to.trim().toLowerCase();

  // check if the unit are valid
  if (!convertsionFactor[from] || !convertsionFactor[to]) {
    throw new Error("Invalid unit provided");
  }

  // preform conversion
  length * convertsionFactor[from][to];

  // format the output without space between length and unit
  return length.toFixed(2) + to;
}

console.log(convertLength(40, "km", "km"));
console.log(convertLength(40, "mile", "mile"));
console.log(convertLength(40, "km", "mile"));
console.log(convertLength(40, "mile", "km"));

// text invalid case
try {
  console.log(convertLength(40, "year", "mile"));
} catch (error) {
  console.error(error.message);
}

//7h. Update conversionLength to support converting between:
// km, mile and also ft:
//.formula: 1 mile = 5280ft
//.formula: 1 km = 3281ft
// .convertLength(5, 'mile', 'km') => 8km
// .convertLength(5, 'mile', 'ft') => 26400ft
// .convertLength(5, 'km', 'ft') => 16406
function convertLengthUpdated(length, from, to) {
  const convertsionFactor = {
    km: {
      km: 1,
      mile: 0.6213,
      feet: 3281,
    },
    mile: {
      mile: 1,
      km: 1.60934,
      feet: 5280,
    },
    feet: {
      feet: 1,
      mile: 0.000189394,
      km: 30.48,
    },
  };

  // Trim and normalize the units
  from = from.trim().toLowerCase();
  to = to.trim().toLowerCase();

  // check if the unit are valid
  if (!convertsionFactor[from] || !convertsionFactor[to]) {
    throw new Error("Invalid unit provided");
  }

  // preform conversion
  // format the output without space between length and unit
  // return length.toFixed(2) + to;
  return length * convertsionFactor[from][to].toFixed(2) + to;
}

console.log(convertLengthUpdated(5, "mile", "km"));
console.log(convertLengthUpdated(5, "mile", "feet"));
console.log(convertLengthUpdated(5, "km", "feet"));
console.log(convertLengthUpdated(5, "feet", "feet"));

// text invalid case
try {
  console.log(convertLengthUpdated(40, "year", "mile"));
} catch (error) {
  console.error(error.message);
}
