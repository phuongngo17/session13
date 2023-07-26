// bài 2
// let x = [-3, 5, 1, 3, 2, 10]
// console.log(x.reverse());
//bài 3
// let n = +prompt("nhập vào 1 số");
// let number = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < number.length; i++) {
//     if (n == number[i]) {
//         console.log( ` vị trí ${i} `)
//     } else {
//         console.log("không có")
//     }
// }
// bài 4
// let a = 10;
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array.push(i)
// }
// console.log("sử dụng phương thức push()", array);

// array.unshift(a);
// console.log("sử dụng phương thức unshift()", array);

// array.pop();
// console.log("sử dụng phương thức pop()", array);

// array.shift();
// console.log("sử dụng phương thức shift", array);

// array.splice(1, 2)
// console.log("sử dụng phương thức",array);

//bài 5
// let array = [1, 2, 3, 4, 5, 6, 7]
// let n = + prompt("nhập vào số bất kì")
// let check = false;
// for (let i = 0; i < array.length; i++){
//     if (n == array[i]) {
//         check = true;
//     }
// }
// if (check == true) {
//     alert("Bingo");
// } else {
//     alert("Chúc bạn may mắn lần sau");
// }
// bài 6
// let n = prompt("Nhập vào đây số bất kỳ được ngăn cách bởi dấu ,");
// let convert = n.split(",");
// console.log(convert);

// let array = [];
// for (i = convert.length - 1; i >= 0; i--) {
//     array.push(convert[i]);
//     console.log(convert.reverse());
// }
// bài 7
// let a = prompt("Nhập vào đấy số bất kỳ ngắn cách bởi dấu ,");
// let convert = a.split(",");
// console.log( convert);

// let max = convert[0];
// for (let i = 0; i < convert.length; i++) {
//     if (max < convert[i]) {
//         max = convert[i]
//     }
// }
// console.log(max);