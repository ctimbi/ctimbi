console.log('UYps Ecuador!');

function addLink() {
  console.log("add link 1")
  var link = document.createElement("li")
  link.innerHTML = "<a href='https://google.com'>google</a>"
  var ul = document.querySelector("aside ul")
  ul.appendChild(link)

  var list2 = document.querySelectorAll("aside li:nth-child(odd)")
  for (let li of list2){
    li.classList.add("desplazar")
    
  }
  
  setTimeout(function(){
    for (let li of list2){
      li.classList.remove("desplazar")
    }
  }, 1000)
 

}


var i=0;

var elemento = document.getElementById("addLink")
elemento.addEventListener("click", function (){
  addLink()
})

var elemento = document.getElementById("titulo1")
elemento.addEventListener("click", function (){
  //alert("click en titulo");
  //elemento.innerHTML = i
  //crearParrafo()

})

elemento.addEventListener("mouseover", function (){
  i = i +1
  console.log(i)
  elemento.classList.add("new_size")
})


//var menu = document.getElementById("menu")
//var listas = menu.getElementsByTagName("li")
//console.log(listas)


//var list = document.querySelectorAll("#menu li")
//console.log(list)


var list2 = document.querySelectorAll("aside li:nth-child(odd)")
console.log(list2)

function crearParrafo(){
  var parrafo = document.createElement("p");
  // Creamos un nodo de texto para el contenido del párrafo
  var contenido = document.createTextNode("Este es un párrafo creado desde JavaScript.");
  // Añadimos el nodo de texto al párrafo
  parrafo.appendChild(contenido);
  // Añadimos el párrafo al final del cuerpo del documento
  document.body.appendChild(parrafo);
}


