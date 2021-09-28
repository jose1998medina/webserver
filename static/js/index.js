//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	//alert("led on");
	console.log("led on");
	document.getElementById("sensor").innerHTML="Encendido";
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "jose.medinapaz1998@gmail.com/t1";
    	client.send(message);
}


function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	document.getElementById("sensor").innerHTML="Apagado";
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "jose.medinapaz1998@gmail.com/t1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

function LED1_REI(){	
	//alert("led off");
	console.log("led off");
	document.getElementById("sensor").innerHTML="Reiniciar";
	message = new Paho.MQTT.Message("REI");
    	message.destinationName = "jose.medinapaz1998@gmail.com/t1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}


// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "jose.medinapaz1998@gmail.com",
    password: "jose.medinapaz1998@gmail.com",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("jose.medinapaz1998@gmail.com/t2");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "jose.medinapaz1998@gmail.com/t1";
  
   
   
    client.send(message);
	
  }



  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
 
 function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
    var sms = message.payloadString.split(";")
    //document.getElementById("res").innerHTML=message.payloadString;
    document.getElementById("res").innerHTML=sms[0];
    document.getElementById("res1").innerHTML=sms[1];
    document.getElementById("res2").innerHTML=sms[2];
    
  }
  




 
  
