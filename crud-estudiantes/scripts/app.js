// scripts/apps.js

// Datos simulados

const estudiantes =[
    {id : 1, Nombre: "Fulano", Apellido: "de tal", edad: 18},
    {id : 2, Nombre: "Juan", Apellido: "Gomez", edad: 22}
];

const tabla = document.getElementById("tablaEstudiantes");

function cargarTabla() {
    tabla.innerHTML = "";
    estudiantes.forEach(est => {
        const fila = `
            <tr>
                <td>${est.id}</td>
                <td>${est.Nombre}</td>
                <td>${est.Apellido}</td>
                <td>${est.edad}</td>
                <td>
                    <button class="btn btn-sm btn-warning">Editar</button>
                    <button class="btn btn-sm btn-danger">Eliminar</button>
                </td>
            </tr>`;
        tabla.innerHTML += fila;
    });
}

cargarTabla();