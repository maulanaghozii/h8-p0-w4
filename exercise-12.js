function countProfit(shoppers) {
  // you can only write your code here!
  //daftar barang yang sale
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];

    let result = []; //menampung profit masing masing barang
    if(shoppers.length > 0){
      // lakukan perulangan untuk setiap barang yang sale
      for( let i = 0; i < listBarang.length; i++){
        //kondisi awal profit setiap daftar belanjaan yang sale
        let listDataBarang = {
            product: '',
            shoppers : [],
            leftOver : 0,
            totalProfit : 0 
        };
        listDataBarang.product = listBarang[i][0];
        //lakukan pengulangan untuk cek apakah ada produk di listBarang yang shoppers inginkan
        for(let j=0; j<shoppers.length; j++){
          //jika ditemukan, maka cek apakah jumlah barang di toko mencukupi permintaan
          if(shoppers[j].product === listBarang[i][0]){
            if(listBarang[i][2] >= shoppers[j].amount){
              listDataBarang.shoppers.push(shoppers[j].name);
              listBarang[i][2] = listBarang[i][2] - shoppers[j].amount;
              listDataBarang.totalProfit = listDataBarang.totalProfit + (shoppers[j].amount * listBarang[i][1]);
            }
          }
        }
      // barang sisa
      listDataBarang.leftOver = listBarang[i][2];
      // masukan listDataBarang ke array result
      result.push(listDataBarang);
      }

    }
    return result
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]