function ubahHuruf(kata) {
    // you can only write your code here!
    const abjad = 'abcdefghijklmnopqrstuvwxyz'; //untuk memudahkan ubah huruf selanjutnya kumpulkan semua abjad
    let arrKata = kata.split('');

    for(let index=0; index<arrKata.length; index++){
      if(abjad.indexOf(arrKata[index])!== -1){
        if(arrKata[index] === 'z'){
          arrKata[index] = 'a';
        } else{
          arrKata[index] = abjad[abjad.indexOf(arrKata[index])+1]
        }
      } 
    }
    return arrKata.join('');
  }
  
  // TEST CASES
  console.log(ubahHuruf('woz')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu