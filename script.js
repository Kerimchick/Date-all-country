const row = document.querySelector(".row")
fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => {
        data.forEach((el) => {
            row.innerHTML += `<div class="col-3">
        <img src=${el.flag} alt="" class="img">  <br>
        name country:  ${el.name} <br>
        capital country:  ${el.capital} <br>
        area cpuntry: ${el.area} <br>
        region: ${el.region} <br>
        subregion:  ${el.subregion}
</div>`
        })
    })
//name, area, capital, region, subregion, картинка под ключом flag