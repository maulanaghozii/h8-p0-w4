function shoppingTime(memberId, money) {
    // you can only write your code here!
    let arrListPurchased = [];
    let changeMoney;
    if(memberId === '' || memberId === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if(money < 50000){
        return 'Mohon maaf, uang tidak cukup';
    } else {
        if (money>1500000){
            arrListPurchased.push('Sepatu Staccatu');
            changeMoney = money-1500000;
            if(changeMoney>500000 && changeMoney<1500000){
                arrListPurchased.push('Baju Zoro');
                changeMoney = changeMoney - 500000;
                if(changeMoney>250000 && changeMoney<500000){
                    arrListPurchased.push('Baju H&N')
                    changeMoney = changeMoney - 250000;
                    if(changeMoney>175000 && changeMoney<250000){
                        arrListPurchased.push('Sweater Uniklooh')
                        changeMoney = changeMoney-175000;
                        if(changeMoney>=50000 && changeMoney<175000){
                            arrListPurchased.push('Cashing Handpone')
                            changeMoney = changeMoney-50000;
                        }
                    }
                }
            }
        } else if(money>500000 && money<1500000){
            arrListPurchased.push('Baju Zoro');
            changeMoney = money-500000;
            if(changeMoney>250000 && changeMoney<500000){
                arrListPurchased.push('Baju H&N')
                changeMoney = changeMoney - 250000;
                if(changeMoney>175000 && changeMoney<250000){
                    arrListPurchased.push('Sweater Uniklooh')
                    changeMoney = changeMoney-175000;
                    if(changeMoney>=50000 && changeMoney<175000){
                        arrListPurchased.push('Cashing Handpone')
                        changeMoney = changeMoney-50000;
                    }
                }
            }
        } else if(money>250000 && money<500000){
            arrListPurchased.push('Baju H&N');
            changeMoney = money-250000;
            if(changeMoney>175000 && changeMoney<250000){
                arrListPurchased.push('Sweater Uniklooh')
                changeMoney = changeMoney-175000;
                if(changeMoney>=50000 && changeMoney<175000){
                    arrListPurchased.push('Cashing Handpone')
                    changeMoney = changeMoney-50000;
                }
            }
        } else if(money>175000 && money<250000){
            arrListPurchased.push('Sweater Uniklooh');
            changeMoney = money-175000;
            if(changeMoney>=50000 && changeMoney<175000){
                arrListPurchased.push('Cashing Handpone')
                changeMoney = changeMoney-50000;
            }
        } else{
            arrListPurchased.push('Casing Handpone');
            changeMoney = money-50000;
        }
    }

    let objShoping ={
        memberId: memberId,
        money: money,
        listPurchased: arrListPurchased,
        changeMoney: changeMoney,
    }
    return objShoping
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja