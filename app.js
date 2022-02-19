// (function app() {
//     let x = "hello"
//     console.log(x);
// }())


// const App = () => {
//     let x = "hello"
//     console.log(x);
// }
// App()

// const apP = function () {
//     let x = "hello"
//     console.log(x);
// }
// apP()
// aPp()

// function aPp() {
//     console.log("hello");
// }


// function findMax() {
//     let max = -Infinity;
//     console.log(max);
//     for(let i = 0; i < arguments.length; i++) {
//       if (arguments[i] > max) {
//         max = arguments[i];
//       }
//     }
//     console.log(max);
//   } 

//   findMax(-4, -5, -6)

// const persons = [
//     {
//         name: "Khudoyor",
//         age: "24"
//     },
// ]

// let bez = document.querySelector(".bez");

// class Man {
//     constructor(name, age) {

//         this.name = name
//         this.age = age
//     }

//     render() {
//         bez.innerHTML += `
//         <div class="text">
//             <h1>Hello ${this.name}</h1>
//             <h1>Hello ${this.age}</h1>
//         </div>
//         `
//     }
// }

// for (let i = 0; i < persons.length; i++) {
//     const { name, age } = persons[i];
//     new Man(name, age).render()

// }


const names = {
    name1: "Khudoyor",
    name2: "Khudoyorkhon",

    friends: function () {
        console.log(this);
    }

}

names.friends()

const myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        console.log(this);
    }
}
myObject.fullName();

const shoes = {
    crocodile: 40,
    crocodil: 42,

}

let arrShoes = Object.entries(shoes)

console.log(arrShoes);


// const persons = {
//     name: "Khudoyorkhon",
//     age: 25
// }
// const persons2 = {
//     name: "Khudoyor",
//     age: 24
// }


// const personName = {
//     Name: function App() {
//         console.log(this.name);
//     }
// }

// personName.Name.call(person2);

const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}
let bn = person.fullName.call(person2);
console.log(bn);

const personsss = {
    fulLname: function () {
        return this.names + " " + this.age
    }
}

const name = {
    names: "Q",
    age: 24
}
const name2 = {
    names: "X",
    age: 23
}
let bx = personsss.fulLname.call(name2, name)

console.log(bx);


let qx = [7, 8, 9, 10];

let bm = Math.max.apply("", qx)

console.log(bm);



let arr = [1, 2, 3];

let resArr = Math.max(...arr);

console.log(resArr);

let x = 1, y = 2, z = 3;

[x, y, z] = [x, y, z];

console.log(x, y, z);