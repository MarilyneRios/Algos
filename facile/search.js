function search(arr) {
    const found = [];
    
    // Insert your code here
    const pattern = /to/gi;
 
    for (let city of arr){
      if (city.match(pattern)) 
      found.push(city);
    };
    
    return found;
}


const cities = ["Paris", "Tokyo", "Buenos Aires", "Toronto", "Londres", "Barcelone", "Kyoto", "Berlin", "Shanghaï", "Melbourne"];
console.log(search(cities));
// Expected : [ 'Tokyo', 'Toronto', 'Kyoto' ]

//--------------------------------------------------------------------
function getDuration(activities) {
    let totalDuration = 0;
    let totalMessage = '';
    
    for (let i = 0; i < activities.length; i++) {
        totalDuration += activities[i].duration;
    }
    totalMessage = `La durée totale de notre randonnée sera de ${totalDuration} minutes.`;
        
    return totalMessage;
}

const activitiesArray = [
    {
        activity: "Climbing to Archard lake",
        duration: 120
    },
    {
        activity: "Fishing in the lake",
        duration: 60
    },
    {
        activity: "Picnic",
        duration: 45
    },
    {
        activity: "Nap in the grass",
        duration: 20
    },
    {
        activity: "Get back to the car",
        duration: 90
    },
]

console.log(getDuration(activitiesArray));