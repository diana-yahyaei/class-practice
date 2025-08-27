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
const input = prompt("enter a number");
console.log(input);
let grad;

if (input >= 91 && input <= 100) {
  grad = "a";
} else if (input >= 81 && input <= 90) {
  grad = "b";
} else if (input >= 71 && input <= 80) {
  grad = "c";
} else if (input >= 61 && input <= 70) {
  grad = "d";
} else if (input >= 0 && input <= 60) {
  grad = "e";
} else {
  console.log("not in range");
}
switch (grad) {
  case "a":
    console.log("well");
    break;
  case "b":
    console.log("yes");
    break;
  case "c":
    console.log("more");
    break;
  case "d":
    console.log("no");
    break;
  case "e":
    console.log("bad");
    break;
}
