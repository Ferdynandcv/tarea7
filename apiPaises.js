'use strict';
window.addEventListener('DOMContentLoaded', inicializa);

function inicializa(e) {

    const nselect = document.getElementById('select');

    select.addEventListener('change', mostrarPaises);

}

function mostrarPaises(e) {

    const continente = e.target.value;

    const url = `https://restcountries.eu/rest/v2/region/${continente}`;

    fetch(url)

        .then(respuesta => {

            if(!respuesta.ok){

                throw new Error ('Tamalito xd');

            }


            return respuesta.json();
        })


        .then(tablapaises)
        .catch(console.error);
}




function tablapaises(paises) {

    const bodypaises = document.getElementById('bodypaises');

    while(bodypaises.hasChildNodes())
        bodypaises.removeChild(bodypaises.lastChild);

    for (const pais of paises) {

        const nTr = document.createElement('tr');
        bodypaises.appendChild(nTr);

        const nTd = document.createElement('td');
        nTr.appendChild(nTd);

        const nTexto = document.createTextNode(pais.translations.es);
        nTd.appendChild(nTexto);


    }

}