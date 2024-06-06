// array = [2,5];

// const user = {
//     "key": "value"
// }

// const user = {
//     name: "Volodymyr",
//     age: 26,
//     city: "Lviv",
//     friends: ["Peter", "Max"],
//     son: {
//         name: "Maria",
//         age: 10
//     }
// }

// console.log(user);

// console.log(user.name);
// console.log(user.age);
// user.name = "Peter";

// user.coutry = "Ukraine";

// delete user.age;


// console.log(user);


// const user = {
//     name: "Volodymyr",
//     age: 26,
//     city: "Lviv",
//     showName: function(){
//         // console.log("Volodymyr");
//         // console.log(user.name);
//         console.log(this.name); //!!! best Practice
//     },
//     setName: function(newName){
//         this.name = newName;
//     }
// }

// // user.showName();
// user.setName("Peter");
// user.showName();

// class

// class User {
//     constructor(name, age, city){
//         this._name = name;
//         this.age = age;
//         this.city = city;
//     }

//     showName(){
//         console.log(this.name);
//     }
//     get name(){
//         return this._name;
//     }

//     set name(newName){
//         if(newName.length < 4){
//             console.log("Name is too short");
//             return;
//         }
//         this._name = newName;
//     }

// }


// const newUser1 = new User("Peter", 45, "Lviv");
// const newUser2 = new User("Peter2", 45, "Lviv");
// const newUser3 = new User("Peter3", 45, "Lviv");

// console.log(newUser1.name);
// newUser1.name = "Volodymyr";
// console.log(newUser1.name);

// console.log(newUser1);
// newUser1.showName();
// newUser2.showName();
// newUser3.showName();



