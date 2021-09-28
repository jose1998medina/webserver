alert('Alerta de control');
sensor=document.getElementById('sensor')
sensor.innerHTML='Valores'
medicion=document.getElementById('medicion')
medicion.innerHTML='Esperando ejecución......'
function inicio() {document.getElementById('medicion').innerHTML="Estado de trabajo";}
function LED1_On() {
  console.log("Se presiono el botón encender")
  document.getElementById('medicion').innerHTML="Led 1 Activado"
  document.getElementById("res").innerHTML=message.payloadString;
}
function LED1_Off() {
  console.log("Se presiono el botón apagar")
  document.getElementById('medicion').innerHTML="Led 1 Desactivado"
  document.getElementById("res").innerHTML=message.payloadString;
}
function LED1_Rei(){
  alert('SE DESCONECTARA DE LA RED')
  console.log("Se presiono el botón reiniciar")
  document.getElementById('medicion').innerHTML="Reiniciando..."
  
}
