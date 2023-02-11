const hero = document.getElementById('hero')
const bio = document.getElementById('bio')
const info = document.getElementById('details')
const searc = document.getElementById('ser')
const ih = document.getElementById('pe')


const hr = (id) => {

  const url = 'https://superheroapi.com/api.php/469438555392653'
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(json => {
const stats=Object.keys(json.powerstats).map(stat=>{
return `<p>${stat}: ${json.powerstats[stat]}</p>`
  }).join('')
      hero.innerHTML = `<img Src='${json.image.url}'/> ${stats}`
      bio.innerText = json.name
      
      
    })
}
const next = document.getElementById('but')
but.onclick = () => hr(Math.floor(Math.random() * 500))

function ser() {
  const url = 'https://superheroapi.com/api.php/469438555392653'
  const nam = document.getElementById('er')
  console.log(nam.value)
 

    fetch(`${url}/search/${nam.value}`)
      .then(response => response.json())
      .then(json => {
        const stats=Object.keys(json.results[0].powerstats).map(stat=>{
    return `<p>${stat}: ${json.results[0].powerstats[stat]}</p>`
  }).join('')

        hero.innerHTML = `<img src='${json.results[0].image.url}'/>${stats} `
        bio.innerText = json.results[0].name
        


      })
  }

searc.onclick = () => ser()
hr(Math.floor(Math.random() * 733))

