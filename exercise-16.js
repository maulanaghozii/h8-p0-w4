function graduates (students) {
    // Code disini
    let result = {}; //variable untuk menampung hasil akhir
    let classes = ''; //untuk set key class dalam object result
    //lekukan pengulangan pada array student
    let amountStudents = students.length; //jumlah siswa
    for(let i=0; i<amountStudents; i++){
        classes = students[i].class;
        //cek apakah student ke-i memiliki score diatas 75
        if(students[i].score > 75){
            //jika result belum memiliki key, maka set key kedalam result
            if(result[classes] === undefined){
                result[classes] = [{
                    name: students[i].name,
                    score: students[i].score
                }];
            } else{ //jika class sudah tersedia maka lakukan push
                result[classes].push({
                    name: students[i].name,
                    score: students[i].score
                })
            }
        } else{ //jika tidak ada student yang lulus maka print array kosong
            if(result[classes]===undefined){
                result[classes] = [{}]
            }
        }
    }
    return result;
  }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}