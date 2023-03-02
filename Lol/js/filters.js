let buscar = (evt) => {
  evt.preventDefault()
  let name = document.querySelector("#inputBusqueda").value.toLowerCase()
  let buscados = characters.filter((character) => {
    return character.name.toLowerCase().includes(name)
  })
  dibujar(buscados)
}

document.querySelector("#alfabeto").addEventListener("click",() => {
    characters.sort(function(a,b){
      return a.id > b.id ? 1 : -1
    })
    dibujar(characters)
    dibujar2(characters)
  })

  document.querySelector("#alfabetoReverso").addEventListener("click",() => {
    characters.sort(function(a,b){
      return b.id > a.id ? 1 : -1
    })
    dibujar(characters)
    dibujar2(characters)
  })

document.querySelector("#inputBusqueda").addEventListener("keyup", buscar)

// document.querySelector("#todos").addEventListener("click",() => 
//   characters.sort(function(a,b){
//     return b.id > a.id ? 1 : -1
//   })
// )

let energia = () =>{
  let partype = document.querySelector("select").value
  let buscados = characters.filter((character)=> {
        return character.partype.toLowerCase().includes(partype)
  })
  dibujar(buscados)
}

select.addEventListener("change",energia)


// let type = () =>{
//   let partype = document.querySelector("select").value
//   let buscados = characters.filter((character)=> {
//         return character.partype.toLowerCase()
//   })
//   dibujar()
// }


// sselect.addEventListener("change",type)
