function shoppingTime(memberId, money) {
    // you can only write your code here!
    let arrListPurchased = [];//variable penampung brand yg dapat dibeli
    let changeMoney = money; //variable kembalian/sisa uang. kita asumsikan kembalian adalah uang yg kita miliki dari awal.
    //daftar product yang sedang sale
    const productSale = {
        product : [['Sepatu Stacattu', 1500000],['Baju Zoro',500000],['Baju H&N',250000],['Sweater Uniklooh', 175000],['Casing Handphone', 50000]]
    }
    let amountProduct = productSale.product.length; //variable menampung banyaknya product yang sale
    if(memberId === '' || memberId === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if(money < productSale.product[amountProduct - 1][1]){
        return 'Mohon maaf, uang tidak cukup';
    } else {
        for(let i = 0; i<amountProduct; i++){
            let price = productSale.product[i][1];
            let brand = productSale.product[i][0];
            if(changeMoney >= price){
                arrListPurchased.push(brand);
                changeMoney = changeMoney - price;
            }
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