// function outerfun(){
//     return function inner(){
//         console.log("I am inner function!!");
//     }
// }

// n=outerfun();
// console.log(n());

// real world use of closure
function bankaccount() {
  let balance = 100;
  user = {
    withdrawal: function (ammount) {
      if (typeof ammount == "number" && ammount >= 0) {
        balance += ammount;
        return balance;
      }
    },
    deposit: function (ammount) {
      if (typeof ammount == "number" && ammount >= 0 && ammount<=balance) {
        balance -= ammount;
        return balance;
      }
    },
    getbalance:function(){
        console.log("the balance in your account is:"+balance);
    }
  };
  return user;
}
const custommer=bankaccount();
console.log(custommer); // --> it returns the reference of this object
console.log(custommer.withdrawal(500));
console.log(custommer.deposit(300));
custommer.getbalance()

