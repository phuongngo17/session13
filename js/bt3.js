const todoList = ["rua rau", "giat do", "nau com"] 
let hanhdong = prompt("Nhap vao hanh dong ban C/R/U/D va 0 de ket thuc") 
while (true) {
    if (hanhdong == "C") {
        let congViec = prompt("Nhap cong viec ban muon lam") 
        todoList.push(congViec) 
        console.log(todoList); 
    } else if (hanhdong == "R") { 
        console.log(todoList);
    } else if (hanhdong == "U") {
        let i;
        do {
            i = Number(prompt(`Nhap vi tri ban muon sua ( 0 - ${todoList.length - 1})`))
        } while (i < 0 || i >= todoList.length)
        let suaCongViec = prompt("Nhap cong viec ban muon sua thanh")
        todoList[i] = suaCongViec 
        console.log(todoList); 
    } else if (hanhdong == "D") { 
        let i;
        do {
            i = Number(prompt(`Nhap vi tri ban muon xoa ( 0 - ${todoList.length - 1})`))
        } while (i < 0 || i >= todoList.length)
        todoList.splice(i, 1) 
        console.log(todoList); 
    } else if (hanhdong == 0) { 
        break;
    } else { } 
    hanhdong = prompt("Nhap vao hanh dong ban C/R/U/D va 0 de ket thuc") 
}
