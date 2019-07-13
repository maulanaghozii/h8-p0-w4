function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let result = []
    if(arrPenumpang[0] === undefined){
        return [];
    } else{
        //lakukan pengulangan untuk cek data dalam index ke i
        for(let i=0; i<arrPenumpang.length; i++){
            //reset dataPenampung
            let dataPenumpang = {
                penumpang : '',
                naikDari : '',
                tujuan : '',
                bayar : 0,
            };
            let cost = 0;
            //menghitung jarak antara titik awal dan tujuan
            let distance = rute.indexOf(arrPenumpang[i][2])-rute.indexOf(arrPenumpang[i][1]);
            cost = distance * 2000; // menghitung biaya yg harus dibayar
            dataPenumpang.penumpang = arrPenumpang[i][0];
            dataPenumpang.naikDari  = arrPenumpang[i][1];
            dataPenumpang.tujuan    = arrPenumpang[i][2];
            dataPenumpang.bayar     = cost;
            result.push(dataPenumpang);
        } 
    }
    return result;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]