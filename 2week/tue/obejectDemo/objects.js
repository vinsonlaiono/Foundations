let person = {
    firstName : 'Chanadler',
    lastName : 'Bong',
    age: 34
}

// console.log(person.firstName);
// console.log(person['firstName'])

let meal = {
    appetizer : 'chips and salsa',
    entree: 'al pastor burrito',
    dessert: 'churros',
    drink: 'coke'
}

let {dessert: firstDesert, appetizer} = meal;
let { drink: bestSodaEver } = meal

// console.log(firstDesert, appetizer, bestSodaEver);

// using dot notation
let myAppetizer = meal.appetizer;
let myEntree = meal.entree;
let myDrink = meal.drink;
let myDessert = meal.dessert;
//using destructuring
const { appetizer: myNewAppetizer, entree:myNewEntree, dessert:myNewDessert,drink:myNewDrink} = meal

// console.log(myNewEntree)
// console.log(myEntree)

// loop through properties
//let i=0
for(const key in person){
    // console.log(key);
}
// loop through values
for(const key in person){
    // console.log(`This persons ${key} is ${person[key]}`);
}

// console.log(person)
// adding a new property to the person object using dot notation
person.job = 'Fullstack Engineer';
// adding a new property to the person object using bracket notation
person['pets'] = ['chicken', 'rabbits'];
// console.log(person)

let teams = {    
    team1 :['Abdirahman Yusuf','Alegra Leeson','Breanna Wentz','Chaltu Hassan'],
    team2: ['Haykal Ahmed','Jatou Gaye','Mohamed Mohamed','Molly Muniz','Mowlid Omar'],
    team3: ['Nathaniel Pucci','Neal Dooley','Sana Amin','Siham Ahmed','Zakaria Mahmed']
}

// console.log(teams)
delete teams.team3
// console.log(teams)

class Dog {
    constructor(name, breed, age){
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    greeting(){
        console.log(`Hi, my name is ${this.name} and I am an ${this.age} year old ${this.breed}`)
    }
}
let lassie = new Dog('Lassie', 'Poodle', 65)
let marley = new Dog('Marley', 'Golden Retriever', 90)

// console.log(lassie.greeting())
// marley.greeting()

//loop through one object
for(const key in lassie){
    // console.log(lassie[key])
}
// loop through two objects
for(const key in lassie, marley){
    // console.log(lassie[key])
    // console.log(marley[key])
}

class Puppy extends Dog{
    constructor(name, breed, age, trainingLevel){
        super(name, breed, age)
        this.trainingLevel = trainingLevel
    }
    levelUp(num){
        this.trainingLevel += num
    }
    attack(enemy){
        enemy.trainingLevel -= 10
        this.levelUp(3)
        console.log(`${this.name} traininglevel is now ${this.trainingLevel}`)
        console.log(`${enemy.name} traininglevel is now ${enemy.trainingLevel}`)
    }
}

const clifford = new Puppy('Clifford', 'Big Red', 100, 75)
const rocket = new Puppy('Rocket', 'Orange', 10, 45)


clifford.levelUp(5)
rocket.levelUp(15)

console.log(clifford)

clifford.attack(rocket)

