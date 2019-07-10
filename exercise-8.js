function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let arrKalimat  = kalimat.split('');

    for(let index = 0; index<arrKalimat.length; index++){
        if(lowerCase.indexOf(arrKalimat[index]) !== -1){
            arrKalimat[index] = upperCase[lowerCase.indexOf(arrKalimat[index])];
        } else if(upperCase.indexOf(arrKalimat[index]) !== -1){
            arrKalimat[index] = lowerCase[upperCase.indexOf(arrKalimat[index])];
        } else {
            arrKalimat[index] = arrKalimat[index];
        }
    }
    let result = arrKalimat.join('');
    return result;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"