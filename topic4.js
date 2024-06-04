// let x = 10;
// let y = 20;
// let z = x + y;

// console.log(z);

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// console.log();

// pritMe();

// try catch

// try{
//     console.log("Start of Try section");
//     printMe();
//     console.log("End of Try section");
// }catch(error){
//     console.log("Catch Section");
// }


// try{
//     console.log("Start of Try section");
//     console.log(;
//     console.log("End of Try section");
// }catch(error){
//     console.log("Catch Section");
// }

// try{
//     console.log("Start of Try section");
//     printMe();
//     console.log("End of Try section");
// }catch(error){
//     // console.log("Catch Section");
//     // console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// new Error("Wrong Age");

// throw - error happening

// try{
//     let age = prompt("What is your age?")
//     if(age < 18){
//         throw new Error("Wrong age");
//     }

// }catch(error){
//     // console.log(error);
//     console.log(error.message);
// }

// try{
//     let age = prompt("What is your age?")
//     if(age < 18 || age > 60){
//         throw new RangeError("Your age is out of range 18-60");
//     }

// }catch(error){
//     // console.log(error);
//     console.log(error.message);
// }

// class AgeError extends Error{
//     constructor(message){
//         super(message);
//         this.name = "AgeError";
//     }
// }

// try{
//     let age = prompt("What is your age?")
//     if(age < 18){
//         throw new AgeError("You age too young");
//     }

// }catch(error){
//     // console.log(error);
//     console.log(error.message);
// }

// try{
//     setTimeout(function(){
//         printMe();
//     }, 2000);
// }catch(error){
//     console.log("Error Happend");
// }

// setTimeout(function(){
//     try{
//         printMe();
//     }catch(error){
//         console.log("Error Happened");
//     }
// }, 2000);