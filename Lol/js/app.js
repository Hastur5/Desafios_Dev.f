const barra = document.querySelector("#barra")
const letras = document.querySelector("#letras")
const alfabeto = document.querySelector("#alfabeto")
const alfabetoReverso = document.querySelector("#alfabetoReverso")
const resultados = document.querySelector("#resultados")
const modal = document.querySelector("#modal")
const campeon = document.querySelector("#campeon")
const select = document.querySelector("#select")


let characters = []

let champion = 

fetch("js/campeones.json")
    .then((response) => response.json())
    .then((data) => {
        characters = data
        dibujar(characters)
        dibujar2(characters)
})

let dibujar = (characters) => {

  document.querySelector("#resultados").innerHTML="";

    for(let i in characters){
      let col = document.createElement("div")
      col.classList.add("col","col-lg-3")

      let card = document.createElement("div")
      card.classList.add("card","mt-5")

      let img = document.createElement("img")
      img.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/centered/${characters[i].id}_0.jpg`;
      img.classList.add("card-img-top","hover")

      let cardBody = document.createElement("div")
      cardBody.classList.add("card-body")

      let h3 = document.createElement("h3")
      h3.classList.add("card-title","titulo")
      h3.innerHTML= characters[i].name
      cardBody.append(h3)

      let h8 = document.createElement("h6")
      h8.classList.add("card-subtitle")
      h8.innerHTML= characters[i].title
      cardBody.append(h8)

        card.addEventListener("click",function(evt){
            evt.preventDefault();
            seleccionar(champion)
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })

      col.append(card)
      card.append(img)
      card.append(cardBody)

      document.querySelector("#resultados").append(col)

        const seleccionar = () => {

          document.querySelector("#modal")
          document.querySelector("sidebar")
          document.querySelector("#modal").innerHTML="";
    
          resultados.classList.add("hide")
          modal.classList.remove("hide")
          sidebar.classList.remove("hide")
          
          let columna = document.createElement("div")
          columna.classList.add("col-12", "offset-md-1","largo")

          let carta = document.createElement("div")
          carta.classList.add("carta")
          columna.append(carta)

          let imagen = document.createElement("img")
          imagen.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${characters[i].id}_0.jpg`;
          imagen.classList.add("largo")
          carta.append(imagen)

          let cardBody = document.createElement("div")
          cardBody.classList.add("card-body")
          carta.append(cardBody)

          let h5 = document.createElement("h5")
          h5.classList.add("card-subtitle")
          h5.innerHTML = `<div class="card">
                          <div class="card-body">
                            <h2 class="card-title titulo"">Champion: ${characters[i].name}</h2> <br>
                            <h4 class="card-subtitle mb-2">${characters[i].title}</h4> <br>
                            <p class="card-text">A lilttle biography of our champ: ${characters[i].blurb}</p>
                            <p class="card-text"> Role: ${characters[i].tags}</p>
                            <p class="card-text"> Type of energy: ${characters[i].partype}</p>
                          </div>
                        </div>`
          cardBody.append(h5)
                    
          back = document.createElement("a")
          back.classList.add("btn","btn-light")
          back.innerHTML="Back"
          carta.append(back)

          back.addEventListener("click",function(evt){
            evt.preventDefault(); 
            resultados.classList.remove("hide")
            modal.classList.add("hide")
            sidebar.classList.add("hide")
          })

          let cSkin = document.createElement("a");
          cSkin.classList.add("btn","btn-light");
          cSkin.innerHTML="Change skin"
          carta.append(cSkin)

            const skin = () => {

              document.querySelector("#modal")
              document.querySelector("#modal").innerHTML="";
      
              resultados.classList.add("hide")
              modal.classList.remove("hide")
              sidebar.classList.remove("hide")
            
              let columna = document.createElement("div")
              columna.classList.add("col-12", "offset-md-1","largo")
  
              let carta = document.createElement("div")
              carta.classList.add("carta")
              columna.append(carta)
  
              let imagen = document.createElement("img")
              imagen.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${characters[i].id}_1.jpg`;
              imagen.classList.add("largo")
              carta.append(imagen)
  
              let cardBody = document.createElement("div")
              cardBody.classList.add("card-body")
              carta.append(cardBody)
  
              let h5 = document.createElement("h5")
              h5.classList.add("card-subtitle")
              h5.innerHTML = `<div class="card">
                            <div class="card-body">
                              <h2 class="card-title">Champion: ${characters[i].name}</h2> <br>
                              <h4 class="card-subtitle mb-2">${characters[i].title}</h4> <br>
                              <p class="card-text">A lilttle biography of our champ: ${characters[i].blurb}</p>
                              <p class="card-text"> Role: ${characters[i].tags}</p>
                              <p class="card-text"> Type of energy: ${characters[i].partype}</p>
                            </div>
                          </div>`
              cardBody.append(h5)

              back = document.createElement("a")
              back.classList.add("btn","btn-light")
              back.innerHTML="Back"
              carta.append(back)

          back.addEventListener("click",function(evt){
            evt.preventDefault(); 
            resultados.classList.remove("hide")
            modal.classList.add("hide")
            sidebar.classList.add("hide")
          })

        
            document.querySelector("#modal").append(columna)  
            }
          
          cSkin.addEventListener("click",function(evt){
            evt.preventDefault(); 
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            skin()
          })

          document.querySelector("#modal").append(columna)
          
        }
      }
  }

  let dibujar2 = (characters) => {

    document.querySelector("#sidebar").innerHTML="";
  
      for(let i in characters){
        let div = document.createElement("div") 

        let ul = document.createElement("ul")
        ul.classList.add("col","col-lg-3")
        ul.innerHTML = `<img class="img-logo hover" src="http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${characters[i].id}_0.jpg" alt="">
                        <li>${characters[i].name}</li>`
        div.append(ul)

        div.addEventListener("click",function(evt){
          evt.preventDefault();
          seleccionar2(champion)
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        })
  
        document.querySelector("#sidebar").append(div)

        const seleccionar2 = () => {

          document.querySelector("#modal")
          document.querySelector("#modal").innerHTML="";
    
          modal.classList.remove("hide")
          sidebar.classList.remove("hide")
          
          let columna = document.createElement("div")
          columna.classList.add("col-12", "offset-md-1","largo")

          let carta = document.createElement("div")
          carta.classList.add("carta")
          columna.append(carta)

          let imagen = document.createElement("img")
          imagen.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${characters[i].id}_0.jpg`;
          imagen.classList.add("largo")
          carta.append(imagen)

          let cardBody = document.createElement("div")
          cardBody.classList.add("card-body")
          carta.append(cardBody)

          let h5 = document.createElement("h5")
          h5.classList.add("card-subtitle")
          h5.innerHTML = `<div class="card">
                          <div class="card-body">
                            <h2 class="card-title">Champion: ${characters[i].name}</h2> <br>
                            <h4 class="card-subtitle mb-2">${characters[i].title}</h4> <br>
                            <p class="card-text">A lilttle biography of our champ: ${characters[i].blurb}</p>
                            <p class="card-text"> Role: ${characters[i].tags}</p>
                            <p class="card-text"> Type of energy: ${characters[i].partype}</p>
                          </div>
                        </div>`
          cardBody.append(h5)
          

          let back = document.createElement("a");
          back.setAttribute("href","#")
          back.classList.add("btn","btn-light");
          back.innerHTML="Back";
          carta.append(back)

          back.addEventListener("click",function(evt){
            evt.preventDefault();
            resultados.classList.remove("hide")
            modal.classList.add("hide")
            sidebar.classList.add("hide")
          })

          let cSkin = document.createElement("a");
          cSkin.classList.add("btn","btn-light");
          cSkin.innerHTML="Change skin"
          carta.append(cSkin)

            const skin = () => {

              document.querySelector("#modal")
              document.querySelector("#modal").innerHTML="";
      
              resultados.classList.add("hide")
              modal.classList.remove("hide")
              sidebar.classList.remove("hide")
            
              let columna = document.createElement("div")
              columna.classList.add("col-12", "offset-md-1","largo")
  
              let carta = document.createElement("div")
              carta.classList.add("carta")
              columna.append(carta)
  
              let imagen = document.createElement("img")
              imagen.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${characters[i].id}_1.jpg`;
              imagen.classList.add("largo")
              carta.append(imagen)
  
              let cardBody = document.createElement("div")
              cardBody.classList.add("card-body")
              carta.append(cardBody)
  
              let h5 = document.createElement("h5")
              h5.classList.add("card-subtitle")
              h5.innerHTML = `<div class="card">
                            <div class="card-body">
                              <h2 class="card-title">Champion: ${characters[i].name}</h2> <br>
                              <h4 class="card-subtitle mb-2">${characters[i].title}</h4> <br>
                              <p class="card-text">A lilttle biography of our champ: ${characters[i].blurb}</p>
                              <p class="card-text"> Role: ${characters[i].tags}</p>
                              <p class="card-text"> Type of energy: ${characters[i].partype}</p>
                            </div>
                          </div>`
              cardBody.append(h5)

              back = document.createElement("a")
              back.classList.add("btn","btn-light")
              back.innerHTML="Back"
              carta.append(back)

              back.addEventListener("click",function(evt){
              evt.preventDefault(); 
              resultados.classList.remove("hide")
              modal.classList.add("hide")
              sidebar.classList.add("hide")
              })

        
            document.querySelector("#modal").append(columna)  
            }
          
          cSkin.addEventListener("click",function(evt){
            evt.preventDefault(); 
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            skin()
          })

          document.querySelector("#modal").append(columna)
      }
    }
}
