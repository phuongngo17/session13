let str = prompt("Nhập tên con vật muốn dịch sang tiếng việt");
let eng = ["cat", "dog", "bear", "fish", "monkey"];
let viet = ["mèo", "chó", "gấu", "cá", "khỉ"];
let kq = [];
let flag = false;
for (i = 0; i < eng.length; i++) {
    if (str == eng[i]) {
        kq.push(viet[i]);
        flag = true;
    }
}
if (flag == false) {
    kq.push("Không tìm thấy dữ liệu");
}
console.log(kq.join(""));