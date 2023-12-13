const citiesList = [
    {
        city: "Paris",
        year: "2018",
        population: 2174000,
    },
    {
        city: "Bordeaux",
        year: "2017",
        population: 258000,
    },
    {
        city: "Cannes",
        year: "2018",
        population: 74000,
    },
    {
        city: "Lyon",
        year: "2018",
        population: 518000,
    },
    {
        city: "Dijon",
        year: "2016",
        population: 82500,
    },
];

function rankCities(cities) {
    let filteredList = cities;
    let sortedList = [];
    let finalList = [];

    for (let i = 1; i < cities.length; i++) {
        if (cities[i].year === 2018) {
            filteredList.push({ city: cities.year, year: cities.year, population: cities.population })
        }
    }

    for (let j = 0; j < cities.length; j++) {
        sortedList = filteredList;
        sortedList.sort((a, b) => (b.population - a.population))
    }

    finalList = sortedList;

    return finalList;
}

console.log(rankCities(citiesList));
// Expected result: 
// [{ city: "Paris", year: "2018", population: 2174000 },
//  { city: "Lyon", year: "2018", population: 518000 }
//  { city: "Cannes", year: "2018", population: 74000 }];
