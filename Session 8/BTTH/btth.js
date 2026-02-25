const squad = [

    ["Nguyen Van A", 10, "FW"],

    ["Tran Van B", 5, "MF"],

    ["Le Van C", 2, "DF"],

    ["Pham Van D", 12, "FW"],

    ["Hoang Van E", 0, "GK"],

    ["Dang Van F", 7, "MF"]

];
let choice;
const displayMenu=()=>{
     choice+=prompt=(
        `--- QUẢN LÝ ĐỘI BÓNG ---

1. Xem danh sách

2. Tìm kiếm (Find)

3. Lọc vị trí (Filter)

4. Tổng bàn thắng (Reduce)

5. Kiểm tra hiệu suất (Some/Every)

0. Thoát`
    );
}
const displayListPerson=(listPlayer)=>{
    listPlayer.forEach((player)=>{
        console.log(`${player[0]}(${player[2]}):${player[1]}Bàn thắng`);
        
    })
}
const findPlayer=(searchName,listPlayer)=>{
    let findUser=listPlayer.filter((player)=>{
        return player[0].toLowerCase().include(searchName.toLowerCase().trim());
    });
    if(findUser==undefined){
        console.log("Khong thay cau thu");
    }else{
        console.log(`${findUser[0]}(${findUser[2]}):${findUser[1]}Bàn thắng`);
    }
    
};
const findPosition=(searchPosition,listPlayer)=>{
    let findPositionPlayer=listPlayer.filter((player)=>{
        return player[2].toLowerCase().include(searchPosition.toLowerCase().trim());
    });
    if(findPosiion==undefined){
        console.log("Khong thay cau thu");
    }else{
        displayListPerson(findPositionPlayer);
    }
    
};
const handleTotalGoal=(listPlayer)=>{
    let sum=listPlayer.reduce((acc,player,index,array)=>{
        return (acc+=player[1]);
    },0);
    return sum;
}
const performance=(listPlayer)=>{
    let isDone=listPlayer.some((player)=>{
        return player[1]==0
    });
    if(isDone==true){
        console.log("co cau thu ch ghi ban");
    }else{
      console.log("tat ca deu ghi ban");
      
    }
}
do{
    displayMenu();
    switch (choice) {
        case 1:
            displayListPerson(squad);
            break;
        case 2:
            let searchName=prompt("Nhap ten cau thu:");
            findPlayer(searchName,squad);
            break;    
        case 3:
            let searchPosition=prompt("Nhap vi tri cau thu:");
            findPosition(searchPosition,squad);
            break;
        case 4:
            console.log(handleTotalGoal(squad));
            break;
        case 5:
            performance(squad);
            break;
        default:
            break;
    }
}while(choice!=0);
