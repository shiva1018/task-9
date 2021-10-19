fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json())
.then((countries)=>
console.log(countries.filter((country)=>country.population<2000000))
);