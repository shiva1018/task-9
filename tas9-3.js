fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json())
.then((countries)=>

countries.forEach((countries)=>{
    console.log(countries.name)
    console.log(countries.capital)
    console.log(countries.flag)
}))
