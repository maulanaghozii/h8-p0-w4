function cariMedian(arr) {
    // you can only write your code here!
    let median;
    let panjang = arr.length;
    if(panjang % 2 !== 0){
        median = arr[(panjang-1)/2];
    } else{
        median = (arr[panjang/2] + arr[(panjang/2)-1])/2;
    }
    return median;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5