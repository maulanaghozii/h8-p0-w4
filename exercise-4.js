function cariModus(arr) {
    // you can only write your code here!
    let arrSort = arr.sort(function(value1,value2){return value1 > value2 });
    let result;
    let currentValue = arrSort[0];
    let nextValue    = arrSort[1];
    for(index = 0; index<arr.length; index++){
        if(currentValue === nextValue){
            result = nextValue;
        } else {
            currentValue = nextValue;
            nextValue    = arrSort[index+2];
        }
  }
  return result;
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1