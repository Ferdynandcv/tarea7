function traer() {
    var contenido = document.getElementById('contenido')
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            contenido.innerHTML = `
        <div>
        <img src="   ${data.results['0'].picture.large}"> 
        <br>
        <p>Nombre:   ${data.results['0'].name.first} </p>
        <br>
        <p>Apellido: ${data.results['0'].name.last}</P
        <br>
        <p>Telefono: ${data.results['0'].phone}</P>
        <br>
        <p>Correo:   ${data.results['0'].email}</P>
        <br>
        </div>`
        })

}

const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
const main = document.getElementById("main");



main.innerHTML = "<p>Cargando...</p>";

fetchPromise.then(response => {

    return response.json();
})

    .then(people => {

        main.innerHTML = listOfNames(people);


    });


function listOfNames(people) {

    const names = people.map(person => `<li>${person.name}</li>`).join("\n");

    return `<ul>${names}</ul>`
}

