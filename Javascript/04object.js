const user={
    name:"sahil",
    age:20,
    email:"sahil@gmail.com",
    amount:5000,
}

// console.log(Object.keys(user));

// console.log(Object.keys(user));

// console.log(Object.entries(user));

// for(let keys of Object.keys(user)){
//     console.log(keys);
// }
// important destructing object 
for(let [keys,values] of Object.entries(user)){
    console.log(keys,values);
}