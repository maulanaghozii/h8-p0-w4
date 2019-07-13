function highestScore (students) {
    // Code disini
    let resultObj = {}; //variable untuk menampung hasil akhir
    let classId   = ''; //untuk menampung key pad resultObj
    //lakukan pengulangan pada parameter
    for(let i = 0; i<students.length; i++){
        let highestName  = ''; //nama dengan nilai tertinggi 
        let highestScore = 0; //nilai tertinggi
        classId = students[i].class;
        //lakukan pengulangan lagi untuk membandingkan score
        for(let j=0; j<students.length; j++){
            if(classId === students[j].class){
                if(highestScore === 0){
                    highestName  = students[j].name;
                    highestScore = students[j].score;
                } else if(highestScore < students[j].score){
                    highestName  = students[j].name;
                    highestScore = students[j].score;
                }
                resultObj[classId] = {
                    name: highestName,
                    score: highestScore
                }
            }
        }
    }
    return resultObj;
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}