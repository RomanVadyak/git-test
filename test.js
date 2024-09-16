// let fruits = ['apple', 'kiwi', 'orange', 'banana', 'lemon', 'agava'];
// let citrus = fruits.slice(2,6);
// console.log(citrus);



// function counter() {
//     let count = 0;
//     function increment() {
//         count++
//         console.log(count);
//     }
//     function decrement() {
//         count--
//         console.log(count);
//     }
//     return {
//         increment: increment,
//         decrement: decrement
//     };
// }
// let myCount = counter();
// myCount.increment();
// myCount.decrement();
// myCount.increment();

// function outer(name) {
//     function inner(){
//         console.log('Hello, ' + name + '!');
//     }
//     return inner;
// }
// let greet = outer('John');
// greet();


// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         return `Hello, my name is ${this.name}`;
//     }
// }
// class Student extends Person {
//     constructor(name, grade) {
//         super(name);
//         this.grade = grade;
//     }

//     greet() {
//         return `${super.greet()} me too in ${this.grade} grade`;
//     }
// }

// let student = new Student('Oleh', 2);
// console.log(student.greet());

// let cars = ['bmw', 'merin', 'lanos', 'kia'];
// let text = '';
// for (let x of cars) {
//     text += x;
// }
// console.log(text);


// let person = {
//     name: 'John',
//     age: 32,
//     sex: 'male'
// }
// let text = '';
// for(let x in person) {
//     text += person[x];
// }
// console.log(text);


// let num = [1, 43 ,23 ,54];
// let txt = '';
// for (let x in num) {
//     txt += num[x];
// }
// console.log(txt);


// let users = [
//     {name: 'John', age: 30},
//     {name: 'Anna', age: 25},
//     {name: 'Bob', age: 35}
// ];
// users.sort((a,b) => a.age - b.age);
// console.log(users);

// let num = [3, 34, 44, 23, 27];
// let result = num.filter(num => num = 27);
// console.log(result);

// let word = 'Give me a second I, I need get my story straight';
// let halfWord = word.slice(0, Math.floor(word.length / 2));
// console.log(halfWord);

// let word = 'i give no fuck about it';
// let result = word.split(' ')[3];
// console.log(result);

// let word = 'give me some money bitch';
// let result = word.slice(12,18);
// console.log(result);


let arr = ['akm', 'api', 'jkl', 'pop']; 
let result = arr.filter(char => char.includes('a'));
console.log(result);


