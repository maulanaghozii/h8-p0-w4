function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    let shortestDigit = 0; //untuk menampung digit terpendek perkalian 
    //lakukan perulangan untuk mencari faktorial
    for(let i=1; i<=angka;i++){ //faktorial pertama
      for(let j=1; j<=angka;j++){ //faktorail kedua
        if(i*j === angka){ 
          let faktorialA = i.toString();
          let faktorialB = j.toString();
          let mergerFaktorial = faktorialA+faktorialB;
          let lenghtMerger = mergerFaktorial.length;

          if(shortestDigit === 0){
            shortestDigit = lenghtMerger;
          } else if(shortestDigit > lenghtMerger){
            shortestDigit = lenghtMerger;
          }

        }
      }
    }
    return shortestDigit;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2