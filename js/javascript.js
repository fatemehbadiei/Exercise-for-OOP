// let client = {
//     name : "fatemeh",
//     balance : 1100,
//     membership : function (){
//         let name;
//         if(this.balance > 1000){
//             name = "gold";
//         }else if (this.balance > 500 ){
//             name = "silver";
//         }else{
//             name = "normal";
//         }
//         return name;
//     }
// }
// console.log(client.balance);
// console.log(client.membership());

//constructor function
// let Client = function (name, balance) {
//     this.name = name,
//         this.balance = balance,
//         this.membership = function () {
//             let name ;
//             if (this.balance > 1000){
//                 name = "gold";
//             }else if(this.balance > 500){
//                 name = "silver";
//             }else{
//                name= "normal";
//             }
//             return name ;
//         }
// }
//
// let person1 = new Client("fatemeh" , 2000);
// let person2 = new Client("hamid" , 400);
// console.log(person1);
// console.log(person2.membership());

//string constructor
// let string1 = "hamid";
// let string2 = new String("hamid");
// console.log(string1);
// console.log(string2);
// console.log(string1 == string2);
// console.log(string1 === string2);


//number constructor
// let number1 = 21;
// let number2 = new Number(21);
// console.log(number1);
// console.log(number2);
// console.log(number1 == number2);
// console.log(number1 === number2);

//array constructor
// let array1 = [1,2,3,4];
// let array2 = new Array(1,2,3,4);
// console.log(array1);
// console.log(array2);
// console.log(array1 == array2);
// console.log(array1 === array2);


//function constructor
// let function1 = function (a,b){
//     return a+b ;
// }
// let function2 = new Function("a" , "b" , "return a+b");
// console.log(function1(5 , 4));
// console.log(function2(5 , 4));


//prototype
// let Client = function (name , balance){
//     this.name = name,
//         this.balance = balance
// }
// Client.prototype.membership = function (){
//             let name ;
//             if (this.balance > 1000){
//                 name = "gold";
//             }else if(this.balance > 500){
//                 name = "silver";
//             }else{
//                name= "normal";
//             }
//             return name ;
// }
// Client.prototype.getClientInfo = function (){
//     return `name : ${this.name} , balance : ${this.balance} , membership : ${this.membership()}`
// }
// Client.prototype.widraw = function (amount){
//     return this.balance -= amount ;
// }
// Client.prototype.deposit = function (amount){
//     return this.balance += amount ;
// }
//
// let person1 = new Client("fatemeh" , 2000);
// let person2 = new Client("hamid" , 400);
// person1.widraw(200);
// person2.deposit(500);
// console.log(person1);
// console.log(person1.getClientInfo());
// console.log(person2.getClientInfo());


//inheriting in OOP
// let Client = function (name , balance){
//     this.name = name,
//         this.balance = balance
// }
// Client.prototype.membership = function (){
//             let name ;
//             if (this.balance > 1000){
//                 name = "gold";
//             }else if(this.balance > 500){
//                 name = "silver";
//             }else{
//                name= "normal";
//             }
//             return name ;
// }
// Client.prototype.getClientInfo = function (){
//     return `name : ${this.name} , balance : ${this.balance} , membership : ${this.membership()}`
// }
// Client.prototype.widraw = function (amount){
//     return this.balance -= amount ;
// }
// Client.prototype.deposit = function (amount){
//     return this.balance += amount ;
// }
//
// let person1 = new Client("fatemeh" , 2000);
// let person2 = new Client("hamid" , 400);
// person1.widraw(200);
// person2.deposit(500);
// console.log(person1);
// console.log(person1.getClientInfo());
// console.log(person2.getClientInfo());
//
// let Business = function (name , balance ,phone ,category){
//     Client.call(this , name , balance),
//         this.phone = phone,
//         this.category = category
// }
// Business.prototype = Object.create(Client.prototype);
// Business.prototype.constructor = Business;
// const business1 = new Business("fatemeh" , 1500000 , "09358110186" , "developer");
// console.log(business1);
// console.log(business1.getClientInfo());


//class in OOP

// class Client {
//     constructor(name, balance) {
//         this.name = name ,
//             this.balance = balance
//     }
//
//     membership() {
//         let name;
//         if (this.balance > 1000) {
//             name = "gold";
//         } else if (this.balance > 500) {
//             name = "silver";
//         } else {
//             name = "normal";
//         }
//         return name;
//     }
//     getClientInfo(){
//         return `name : ${this.name} , balance : ${this.balance} , membership : ${this.membership()}`;
//     }
//     widraw(amount){
//        return this.balance -= amount;
//     }
//     deposit(amount){
//         return this.balance += amount;
//     }
// }
//
// let person1 = new Client("fatemeh" , 5000);
// let person2 = new Client("hamid" , 1000);
// person1.widraw(200);
// person2.deposit(500);
// console.log(person1);
// console.log(person2.getClientInfo());
//
// class Business extends Client {
//     constructor(name,balance,phone,category) {
//         super(name,balance);
//         this.phone = phone ,
//             this.category = category
//     }
//     getClientInfo() {
//         return `name : ${this.name} , balance : ${this.balance} , membership : ${this.membership()} , phone : ${this.phone}`;
//     }
// }
// const business1 = new Business("hamid" , 100 , "09375775947" , "developer")
// console.log(business1);
// console.log(business1.getClientInfo());


//factory function

// function person(firstName,lastName) {
// //     return{
//         firstName,
//         lastName,
//         age(){
//             return "hello world";
//         }
//     }
// }
// var person1 = person("ali" , "alinia");
// var person2 = person("hamid" , "rohani");
// console.log(person1);
// console.log(person2);
// console.log(person2.age());


//add and delete a property from object

// var person = {
//     firstName : "fatemeh",
//     lastName : "badiei"
// }
// person.age = 21;
// person.address = function (){
//     return{
//         city : "isfahan",
//         street : "robat"
//     }
// }
// delete person.firstName;
// console.log(person);
// console.log(person.address());
// console.log(person.address().city);


//save data in js

// var x = 10 ;
// var y = x ;
//
// console.log(x);
// console.log(y);
//
// var x = 15;
//
// console.log(x);
// console.log(y);


// var x = {value : 20}
// var y = x ;
//
// console.log(x);
// console.log(y);
//
// x.value = 25 ;
//
// console.log(x);
// console.log(y);

// var x = [1,2,3];
// var y = x ;
//
// console.log(x);
// console.log(y);
//
// x[0] = 4 ;
//
// console.log(x);
// console.log(y);


//peymayesh in property in object

// var person = {
//     firstName: "fatemeh",
//     lastName: "badiei"
// }
// for (const key in person){
//     console.log(key,person[key]);
// }
// if ("lastName" in person) console.log("yes");


//copy object's property in another object

// var person = {
//     firstName : "fatemeh",
//     lastName : "badiei"
// }
// // var personInfo = {};
// // for (const key in person){
// //     personInfo[key] = person[key];
// // }
// // console.log(person);
// // console.log(personInfo);
//
// //second method
// var personInfo = Object.assign({},person)
//
// console.log(person);
// console.log(personInfo);
//
// var personInfo1 = Object.assign({age:21},person)
//
// console.log(person);
// console.log(personInfo1);


//date object in js

// var now = new Date();
// var date1 = new Date(2020,11,18,22,30,21,3);
// var date2 = new Date("december 18 2020 21:30");
// var date3 = now.getFullYear() ;
// var date4 = now.setFullYear(2023);
// var date5 = now.toISOString() ;
// var date6 = now.toString();
// console.log(now);
// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);
// console.log(date5);
// console.log(date6);


//exercise for OOP

//exercise 1

// var address = {
//     city : "isfahan",
//     street : "robat" ,
//     zibcode : "8561634487"
// }
//
// function showAddress(arg) {
//     for (const key in arg){
//         console.log(`${key} : ${arg[key]}`)
//     }
// }
// showAddress(address);


//exercise 2

// function address(city,street,zibcode) {
//     return{
//         city,
//         street,
//         zibcode
//     }
// }
// var address1 = address("isfahan","robat" ,"8561634487");
// console.log(address1);
// console.log(address("isfahan","robat","8561634487"));

// function Address(city,street,zibcode) {
//     this.city = city,
//         this.street = street,
//         this.zibcode = zibcode
// }
// var address1 = new Address("tehran" , "niavaran" ,"8561845759");
// console.log(address1);

//exercise 3

// function Address(city,street,zibcode) {
//     this.city = city,
//         this.street = street,
//         this.zibcode = zibcode
// }
//
// var address1 = new Address("w","x","y");
// var address2 = new Address("w","x","y");
//
// function areSame(obj1 , obj2) {
//     return obj1 === obj2 ;
// }
// function areEqual(obj1 , obj2) {
//     return obj1.city === obj2.city &&
//              obj1.street === obj2.street &&
//                 obj1.zibcode === obj2.zibcode
// }
// console.log(areSame(address1,address2));
// console.log(areEqual(address1,address2));


//exercise 4
// var post = {
//     title : "a",
//     body : "b",
//     author : "c",
//     views : 12,
//     comments : [
//         {author : "d" , body : "e"},
//         {author : "f" , body : "g"}
//     ],
//     isLive :true
// }

//exercise 5

function Post(title,body,author) {
    this.title = title ,
        this.body = body ,
        this.author = author,
        this.comments = [],
        this.views = 0 ,
        this.isLive = false
}

var post1 = new Post("javascript" , "hello world" , "fatemeh");
console.log(post1);























