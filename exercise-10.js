function changeMe(arr) {
    // you can only write your code here!
    for(let i=0; i<arr.length; i++){
        let ageNow;
        if(arr[i][3]===undefined || arr[i][3]>2019){
            ageNow = 'Invalid Birth Year';
        } else{
            ageNow = 2019 - arr[i][3];
        }
        let objIdentity = {
            firstName: arr[i][0],
            lastName : arr[i][1],
            gender   : arr[i][2],
            age      : ageNow,
        }
        console.log(i+1+'. '+objIdentity.firstName+' '+objIdentity.lastName+':');
        console.log(objIdentity);
    }
    
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""