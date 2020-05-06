 // we'll be working with map, filter, reduce and co

 const companies = [
     {name: "company One", category:"Finance", start: 1981, end:1989, salary: 5000},
     {name: "company Two", category:"Retail", start: 1992, end:2008, salary: 3000},
     {name: "company Three", category:"Auto", start: 1999, end:2007, salary: 400},
     {name: "company Four", category:"Manufacturing", start: 1989, end:2010, salary: 6000},
     {name: "company Five", category:"Retail", start: 2009, end:2014, salary: 9000},
     {name: "company Six", category:"Tech", start: 1987, end:2010, salary: 8000},
     {name: "company Seven", category:"Finance", start: 1986, end:1986, salary: 3000},
     {name: "company Eight", category:"Space Tech", start: 2011, end:2016, salary: 1000},
     {name: "company Nine", category:"Retail", start: 1981, end:1989, salary: 4500},
     {name: "company Ten", category:"Finance", start: 2000, end:2020, salary: 5500},
 ];
 
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32, 3];

// basic for loop
//for (let i=0; i<companies.length; i++){
  //  console.log(companies[i]);
// }

// forEach in action
// get the category and year
companies.forEach(function(item){
    //console.log(item.name)
    //console.log(item.category);
});

// Using the Map method in arrays
const maped = companies.map(function(company){
    //console.log(company);
})
const agesMap = ages
.map(age => age * 2)
.map(age => Math.sqrt(age));


// Using the filter method
const companyCategory = companies.filter(company => company.category === 'Retail');
//console.log(companyCategory);

const ageCat = ages.filter(age => age > 21);
//console.log(ageCat);

const Companies80s = companies.filter(company => (company.start >= 1980 && company.start <= 1999));
//console.log(Companies80s);

const company10 = companies.filter(company => company.end - company.start >= 10);
//console.log(company10);


// Sort Method

const sortCompany = companies.sort((a, b) => a.start > b.start ? 1 : -1);
//console.log(sortCompany);

const sortedAge = ages.sort((a, b) => a - b); // b - a does the sorting in reverse order.
//console.log(sortedAge);

// Reduce Method

const totalAges = ages.reduce((total, age) => total + age, 0);
//console.log(totalAges);

const  totalYear = companies.reduce((total, company) => total + (company.end - company.start), 0)
//console.log(totalYear);

// ARRAYS


// We have two ways of creating arrays, we can call the constructor or 
// create manually

let array = [];
let fruits = ['Apple', 'Orange', 'Mango', 'Cherry']
let food = ['Eba', 'Semo', 'Amala', 'Rice', 'Beans']
array.push(...fruits, ...food); //push adds to an array using the spread operator
//console.log(array);

//console.log(array[5]); // display element 5 remember zero indexing

let arr = [];

arr.unshift(...food); // adds to the begining of the array
//console.log(arr);
arr.push('Yam'); // adds to the end of the array
//console.log(arr);
arr.shift(); // removes from the begining of the array
//console.log(arr);
arr.pop() // removes from the end of an array
//console.log(arr);


// DESTRUCTURING ASSIGNMENT
// Allows to break down objects and arrays into bunch of variables
// using the previosu declared arrays and objects

// destructuring with arrays
let [eba, semo, ...rest] = food
//console.log(eba);

//console.log(rest); // returns an array of the remaining elements rest can be anything

let staff =  {};
[staff.name, staff.lastName] = 'Oluwatomisin Adebayo'.split(' ')
// console.log(staff);
catList = [];

// destructuring with objects

// recursion and stacking
function pow(x, n){
    if (n == 1){
        return x;
    }
    else{
        return x * pow(x, n - 1);
    }
}

console.log(pow(3, 3));

function sumSalary(department){
    if (Array.isArray(department)){
        return department.reduce((total, prev) => total + prev, 0);
    }
    else{
        let sum = 0;
        for (let subdep of department){
            sum += sumSalary(subdep);} 
        
        return sum;
    }
}

console.log(Array.isArray(companies[1]))

function sumArray(array){
    if (Array.isArray(array)){
        return array.reduce((total, prev) => total +prev, 0);
    }
}

let got = [12, 45, 89, 90, 87, 67, 90];

function arraySum(...args){
    let sum = 0;
    for (let i of args){
        sum += args[i];
    }
    return sum
}

console.log(arraySum(got));

// Cache Decorators

function cacheDecorator(func, hash){
    let cache = new Map();
    return function(){
        let key = hash(arguments);
        if (cache.has(key)){
            return cache.get(key);
        }
        let result = func.call(this, ...arguments);
        return result;
    }
}

function hash(){
    return [].join.call(arguments)
}

function pow(x, n){
    if (n== 1){
        return x;
    }
    else{
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 3));

let pow1 = cacheDecorator(pow, hash);
