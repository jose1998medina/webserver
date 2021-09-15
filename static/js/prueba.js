alert('Alerta de virus ten cuidado');
sensor=document.getElementById('sensor')
sensor.innerHTML='Esperando orden'
medicion=document.getElementById('medicion')
medicion.innerHTML='Error'
function inicio() {document.getElementById('medicion').innerHTML="Error";}
function LED1_On() {
  console.log("Se presiono el botón encender")
  document.getElementById('medicion').innerHTML="Led 1 Activado"
}
function LED1_Off() {
  console.log("Se presiono el botón apagar")
  document.getElementById('medicion').innerHTML="Led 1 Desactivado"
}