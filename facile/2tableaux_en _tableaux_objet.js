function mergeArrays(header, data) {
    let newArray = [];
    
  //parcourir le tableau
  for (const x of data) {
        //transformer en obj
        const obj = {};
     for (let i = 0; i < header.length; i++) {
            obj[header[i]] = x[i];
        }
        newArray.push(obj);
  }

  

    return newArray
}


const labels = ["firstname", "age", "sex", "city"];
const infos = [
   ["Paul", 28, "male", "Paris"],
   ["Audrey", 35, "female", "Lyon"],
   ["Maxime", 33, "male", "Marseille"],
   ["Justine", 26, "female", "Nice"]
];
console.log(mergeArrays(labels, infos));
// Expected result:
// [
//     { firstname: 'Paul', age: 28, sex: 'male', city: 'Paris' },
//     { firstname: 'Audrey', age: 35, sex: 'female', city: 'Lyon' },
//     { firstname: 'Maxime', age: 33, sex: 'male', city: 'Marseille' },
//     { firstname: 'Justine', age: 26, sex: 'female', city: 'Nice' }
// ]
//--------------------------------------------------------