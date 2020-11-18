const listAccounts = [
    { id: 1, username: 'aduvip', balance: 1000000, type: 'normal' },
    { id: 2, username: 'aduvip1', balance: 500000, type: 'normal' },
    { id: 3, username: 'aduvip2', balance: 0, type: 'normal' },
    { id: 4, username: 'aduvip3', balance: 20000, type: 'normal', isActive: false },
    { id: 5, username: 'aduvip4', balance: 2500000, type: 'normal' },
    { id: 6, username: 'aduvip5', balance: 0, type: 'normal', isActive: false },
    { id: 7, username: 'aduvip6', balance: 1300000, type: 'normal' },
    { id: 8, username: 'aduvip7', balance: 2200000, type: 'normal' },
    { id: 9, username: 'aduvip8', balance: 1450000, type: 'normal', isActive: false },
    { id: 10, username: 'aduvip9', balance: 0, type: 'normal' },
    { id: 11, username: 'aduvip10', balance: 780000, type: 'normal', isActive: false },
    { id: 12, username: 'aduvip11', balance: 560000, type: 'normal' },
    { id: 13, username: 'aduvip12', balance: 0, type: 'normal', isActive: false },
    { id: 14, username: 'aduvip13', balance: 430000, type: 'normal' },
    { id: 15, username: 'aduvip14', balance: 990000, type: 'normal', isActive: false },
    { id: 16, username: 'aduvip15', balance: 10000, type: 'normal' },
  ]
  //a
function setVIP(listAccount){
    return listAccount.map((item) => {
        if(item.balance > 1000000){
            item.type = 'VIP';
        }
        return item;
    });
}
console.log("A)============");
console.log(setVIP(listAccounts));
//b
function napTK(listAccount, id, balance){
    return listAccount.map( (item) =>{
        if (item.id==id) {
            if (item.balance==0)
                item.balance=balance+balance*2;
                else item.balance+=balance
        }
        return item;
    } )
}
console.log("B)==============");
console.log(napTK(listAccounts, 3, 9999999));
//c

function checkIsActive(listAccount){
    return listAccount.map( (item)=>{
        if(item.isActive==false)
            item.isActive=true;
        return item;    
    })
}
console.log("C)=================");
console.log(checkIsActive(listAccounts));


