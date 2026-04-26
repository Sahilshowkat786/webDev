// function getvalue(num1,num2){
//     console.log("the addition of numbers are:");
//     return num1 +num2;

// }
// console.log(getvalue(4,7));

// for more than two intergers
// we use rest operator

// function addition(...num) {
//   let sum = 0;
//   for (let n of num) {
//     sum += n;
//   }
//     console.log("The sum of numbers are :"+sum);
  
// }
// addition(5,6);

// Another method to define function 

// const addition= function(n1,n2){
//     return n1+n2;
// }
// console.log(addition(9,5));
//

//arrow function
// const addition=(n1,n2)=>{
//     return n1+n2;
// }

    // Or
// const additions =(n1,n2)=>n1+n2;
// console.log(additions(5,7));

// Object in a function
// const greet=()=>({name:'sahil',age:20});
// console.log(greet());

//IIFE
// (function check(){
//     console.log("hi");
// })();


// function call back 

function rapido(){
    console.log("agent:I am ready to go there!!");
}
function uber(){
    console.log("agent:I am ready to go to the destination");
}

function company(amount,callback){
    console.log(`${amount} received. we are delivering.Connecting to agent`);
    callback();
}

company(500,uber);