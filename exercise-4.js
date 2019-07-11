function cariModus(arr) {
    // you can only write your code here!
    let modus; //menyimpan nilai modus
    let sumSameValue = 1; //banyaknya nilai yang sama muncul
    let counter = 0 // menghitung angka sama yang muncul
    let totalCount = 0 // menghitung counter yang ada
    
    for(let i = 0; i<arr.length; i++){
        //mengembalikan kembali 0 pada karakter berikutnya
        counter = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[i]===arr[j]){
                counter = counter + 1;
            }
        }
        //apabila nilai counter lebih besar dari nilai sumSameValue maka ubah nilai sumSameValue menjadi counter
        if(counter>sumSameValue){
            sumSameValue = counter;
            modus = arr[i];
        } 
        totalCount = totalCount + counter;
    }
    //apabila semua value dalam arr sama maka anggap tidak ada modus
    if((totalCount/arr.length) === sumSameValue){
        modus = -1;
    }
    return modus;

}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1