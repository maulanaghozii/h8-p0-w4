function fpb(angka1, angka2) {
    // you can only write your code here!
    let pembagi1 = [];
    let pembagi2 = [];

    for(let pembagi = 1; pembagi<angka1; pembagi++){
        if(angka1 % pembagi === 0){
            pembagi1.push(pembagi);
        }
    }

    for(let pembagi = 1; pembagi<angka2; pembagi++){
       if(angka2 % pembagi === 0){
            pembagi2.push(pembagi);
       } 
    }
    let counter;
    for(let i=0; i<pembagi1.length;i++){
        for (let j = 0; j < pembagi2.length; j++) {
            if(pembagi1[i] === pembagi2[j]){
                if(counter === undefined){
                    counter = pembagi1[i];
                } else {
                    if(counter < pembagi1[i]){
                        counter = pembagi1[i];
                    }
                    
                }
            }
            
        }
    }
    return counter;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1