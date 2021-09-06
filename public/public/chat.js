console.log('chat codigo')
const socket = io()

let mensaje = document.getElementById('mensaje');
let nombre = document.getElementById('nombre');
let btn = document.getElementById('enviar');
let salida = document.getElementById('salida');
let accion = document.getElementById('accion');
let usuario = document.getElementById('usuario_nom');

btn.addEventListener('click', function () {
	nombre.style.display="none"
	usuario.innerHTML=`<h2>${nombre.value}</h2>`
	usuario.style.display="block"
	socket.emit('chat:mensaje', {
		mensaje: mensaje.value,
		nombre: nombre.value,
		rs: document.getElementById('mensaje').value = ""
	})
});

mensaje.addEventListener('focus', function () {
	socket.emit('chat:escribiendo', nombre.value);
});


socket.on('chat:mensaje', function (data) {
	accion.innerHTML = '';
	salida.innerHTML += `<p>
		<strong style="color: #757575;">${data.nombre}</strong>: ${data.mensaje}
	</p>`
});

socket.on('chat:escribiendo', function (data) {
	accion.innerHTML = `<p><strong style="color: #03a9f4;">${data}</strong><em style="color: #02a6bb;"> Esta escribiendo...</em></p>`
});
