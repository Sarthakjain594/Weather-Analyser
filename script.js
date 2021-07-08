// const {APIKey} = require("./config.json");
var cityname = $("#city");
var submit = $("#submit");
var reset = $("#reset");
var temperatureVar = $("#temperature");
var descVar = $("#desc");
var humidityVar= $("#humidity");
var windspeedVar= $("#wind");
 
// var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname.val()}&appid=${APIKey}` ;

submit.on ( 'click' , ()=> {
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.val()}&units=metric&appid=1ced8e8756a1069034cf5ed619bc1448`)
   .then(response => response.json())
   .then(data => {
     
      var nameValue = data.name ; 
      var tempValue = data.main.temp + " deg Cel";
      var windValue = data.wind.speed + " km/h"
      var humidityValue = data.main.humidity + "%" ; 


      temperature.innerHTML = tempValue;
      humidity.innerHTML = humidityValue;
      wind.innerHTML = windValue;
   })
})

reset.on('click' , ()=>{
   cityname.val(null);
   temperature.innerHTML = "";
   humidity.innerHTML = "";
   wind.innerHTML = "";
})