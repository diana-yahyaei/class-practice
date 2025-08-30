"use strict";
// console.log("2" + 5 - 6 + "1");
// console.log("123" < 56);
// console.log("12" * "2");
// console.log(1 + "10" / 2);
// console.log(15 + "5" - 2 * "4" > false);
// // 155-8=147 , false=0 => 147>0 => true
// -------------------------------------------------------------
// console.log(true || (false && !not));
// console.log("12" || 0);
// console.log(typeof "12" || 0);
// console.log("12" && 0);
// console.log(null || (false && !"0"));
// // "0"=>true 0 changed to boolean
// -----------------------------------------------------------------
// const grad = "b";
// switch (grad) {
//   case "a":
//     console.log("good work🥰");
//     break;
//   case "b":
//   case "b2":
//     console.log("work better😚");
//     break;
//   case "c":
//     console.log("bad work😶");
//     break;
//   default:
//     console.log("try more😌");
//     break;
// }
// -----------------------------------------------------------------------
// const input = prompt("enter a number");
// console.log(input);
// let grad;

// if (input >= 91 && input <= 100) {
//   grad = "a";
// } else if (input >= 81 && input <= 90) {
//   grad = "b";
// } else if (input >= 71 && input <= 80) {
//   grad = "c";
// } else if (input >= 61 && input <= 70) {
//   grad = "d";
// } else if (input >= 0 && input <= 60) {
//   grad = "e";
// } else {
//   console.log("not in range");
// }
// switch (grad) {
//   case "a":
//     console.log("well");
//     break;
//   case "b":
//     console.log("yes");
//     break;
//   case "c":
//     console.log("more");
//     break;
//   case "d":
//     console.log("no");
//     break;
//   case "e":
//     console.log("bad");
//     break;
// }
// ----------------------------------------------------------------------
// const firstName = "mehrnosh";
// const age = 19;

// let message;
// if (age >= 18) {
//   message = "is adult";
// } else {
//   message = "";
// }
// // let message=age>=18?'is adult':'';🥰
// // اولی درست دومی اشتباه
// console.log(`${firstName} is ${age} ${message}`);
// // توی داخل لاگ expretion عه ولی کلش نه استیتمنته
// -----------------------------------------------------------------------
// function caluclate(birthYear) {
//   const age = 1404 - birthYear;
//   return age;
// }
// console.log(caluclate(1380));
// ---------------------------------------------------------------------------

// function caluclateDiscount(amount, discount) {
//   let discountAmount = amount * discount;
//   const totalPrice = amount - discountAmount;
//   return totalPrice;
// }
// console.log(caluclateDiscount(1000, 0.5));
//---------------------------------------------------------------
// function checkNumber(number) {
//   if (number % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }
// console.log(checkNumber(9));
//------------------------------------------------------------------
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
//--------------------------------------------------------------------
// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }
// // as 5 ta 1 be sorat ax
//-------------------------------------------------------------------
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    if (i === 2) {
      continue;
    }
    if (j === 2) {
      continue;
    }
    console.log(i * j);
  }
}
