let choice = [] ;
const squad = [

    ["Nguyen Van A", 10, "FW"],

    ["Tran Van B", 5, "MF"],

    ["Le Van C", 2, "DF"],

    ["Pham Van D", 12, "FW"],

    ["Hoang Van E", 0, "GK"],

    ["Dang Van F", 7, "MF"]

];
 



do {

    choice =+ prompt(

    `--- QUẢN LÝ ĐỘI BÓNG ---
1. Xem danh sách
2. Tìm kiếm (Find)
3. Lọc vị trí (Filter)
4. Tổng bàn thắng (Reduce)
5. Kiểm tra hiệu suất (Some/Every)
0. Thoát`
)
switch (choice) {
    case 1:
        const displayListPerson = (listPerson) =>{
    listPerson.forEach((item) => {
        console.log(`${item[0]} (${item[2]}) : ${iteam[1]}`)
        
        
    });
}
        
 break;

    default:
        break;
}

    
} while (choice!=0);



