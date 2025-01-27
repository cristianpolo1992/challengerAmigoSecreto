// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

// Obtener referencias a los elementos del DOM Html
// Aqui obtenemos los input y listas de los ID de html y
// le asignamos una variable para trabajarla en nuestro Java Scrip
let nombreInput = document.getElementById("amigo");
let adicionarLista = document.getElementById("agregarAmigo");
let listaNombres = document.getElementById("listaAmigos");
let sortearAmigo = document.getElementById("sortearAmigo");
let resultado = document.getElementById("resultado");

// Arreglo donde almacenaremos los nombres (array de listas)
let nombres = [];

// Función para agregar un nombre a la lista (a la lista nombres[])
adicionarLista.addEventListener("click", () => { //colocamos en escucha el boton agregarAmigo cuando reciba un click
    let nombreAmigo = nombreInput.value.trim(); //le asignamos una variable a el nombre ingresado en input amigo
    
    if (nombreAmigo !== "") { // Si lo que se escribio en el inputamigo es diferente de "nada"
        nombres.push(nombreAmigo); // agregalo a la lista de nombres
        actualizarLista(); // Aqui llamamos a la funcion actualizarlista
        nombreInput.value = ""; // aqui limpiamos el campo de texto para que el usuario no tega que borrar el antiguo nombre
    }else { //este else es por si el usuario no coloco ningun nombre de amigo
        alert('Coloca un nombre valido por favor');
    }
});

// Función para actualizar la lista en pantalla
function actualizarLista() {
    listaNombres.innerHTML = ""; // Aqui hacemos alusion a la lista desordenada de html
    nombres.forEach(nombreAmigo => { // Aqui hacemos uso de un foreach como bucle repetitivo agregando nombres a la lista
        let li = document.createElement("li"); // Esta variable a mostrar la lista en pantalla para el usuario
        li.textContent = nombreAmigo;
        listaNombres.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
sortearAmigo.addEventListener("click", () => { //colocamos el boton sortearAmigo en escucha de el evento click
    if (nombres.length > 0) { // si lo que contiene la lista de nombres es mayor a 0 entonces
        let aleatorio = nombres[Math.floor(Math.random() * nombres.length)]; // dame un nombre aleatorio
        resultado.textContent = `¡El amigo secreto es: ${aleatorio}!`; // el resultado del amigo secreto
    } else { //si la lista esta en 0 nombres mandara este msj
        resultado.textContent = "Por favor, Introduce al menos un nombre de amigo.";
    }
});
