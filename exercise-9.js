function checkAB(num) {
    // you can only write your code here!
    let positionA;
    let positionB;
    for(i=0; i<num.length;i++){
        // mencari apakah ada karakter 'a' dalam string
        if(num[i] === 'a'){
            positionA = i;
            let distance; //menyimpan jarak antara karakter 'a' dan 'b'
            for(j=0; j<num.length; j++){
                //jalanlan aksi jika terdapat karakter a dan b dalam satu string
                if(num[i] === 'a' && num[j]==='b'){
                    //menhitung jarak a dan b hasil dalam bilangan bulat positif
                    distance = Math.abs(i - j);
                    //lakukan aksi jika jarak antara a dan b terdapat 3 gap
                    if(distance / 4 === 1){
                        return true
                    } else{
                        return false;
                    }
                }
            }
        // mencari apakah ada karakter 'b' dalam string
        } else if(num[i] === 'b'){
            positionB = i;
            let distance; //menyimpan jarak antara karakter 'b' dan 'a'
            for(j=0; j<num.length; j++){
                //jalankan aksi jika terdapat karakter b dan a dalam satu string
                if(num[i] === 'b' && num[j] === 'a'){
                    //menghitung jarak a dan b hasil dalam bilangan bulat positif
                    distance = Math.abs(i - j);
                    // lakukan aksi jika jarak antara a dan b terdapat 3 gap
                    if(distance / 4 === 1){
                        return true;
                    } else{
                        return false;
                    }
                }
            }
        }
    }
    //jika dalam satu string tidak terdapat karakter a atau b maka kembalikan false
    if(positionA === undefined || positionB === undefined){
        return false;
    }
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false