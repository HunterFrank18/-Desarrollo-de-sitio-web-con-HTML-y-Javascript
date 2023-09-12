let listElements = document.querySelectorAll('.list__button--click',);

const nombre = document.getElementById("name");

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{

        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight=="0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;
       
    })

    window.onload = function(){
        window.datos =[];
      }

      function agregarElemento(){
       let dato = document.getElementById('texto');

      datos.push(dato);
      }

      function mostrarArreglo(){
          let resultado = document.getElementById('resultado');
          resultado.innerHTML = '';

          for (const dato of datos) {
              let datoParrafo = document.createElement('p');
              datoParrafo.innerText = dato;

              resultado.appendChild(datoParrafo);
          }
      }

    
        

});

