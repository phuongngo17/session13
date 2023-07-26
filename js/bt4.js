const bakery = ["chocolate", "cookies", "chips"]
const cart = [];
console.log(bakery);
let traLoi = "";
while (traLoi != "no") {
    let sanPham = prompt("nhập vào sản phẩm bạn muốn");
    if (bakery.includes(sanPham)) {
        let check = false;
        let vitri
        for (let i = 0; i < cart.length; i++) {
            if (sanPham == cart[i][0]) {
                check = true
                vitri = i
            }
        }
        if (check == false) {
            cart.push([sanPham, 1])
        } else {
            cart[vitri][1] += 1;
        }
        console.log(cart);
        do {
            traLoi = prompt("Bạn có muốn mua nữa không")
        } while (traLoi != "yes" && traLoi != "no");
        if (traLoi == "yes") {
            continue;
        } else {
            break;
        }
    } else {
        console.log("Cửa hàng không có sản phẩm này");
    }
}