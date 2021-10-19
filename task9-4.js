fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json())
.then((countries)=>
console.log(countries.map((country)=>country.population)
                     .reduce((sum,curr)=>sum+curr,0))
);