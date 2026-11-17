async function getWeather(){
 const city=document.getElementById("city").value.trim(),result=document.getElementById("result");
 if(city===""){result.textContent="Please enter a city name.";return;}
 result.textContent="Loading...";
 try{
  const placeResponse=await fetch("https://geocoding-api.open-meteo.com/v1/search?name="+encodeURIComponent(city)+"&count=1");
  if(!placeResponse.ok)throw new Error("Geocoding request failed");
  const placeData=await placeResponse.json();
  if(!placeData.results||placeData.results.length===0){result.textContent="City not found.";return;}
  const place=placeData.results[0];
  const weatherResponse=await fetch("https://api.open-meteo.com/v1/forecast?latitude="+place.latitude+"&longitude="+place.longitude+"&current=temperature_2m,relative_humidity_2m,wind_speed_10m");
  if(!weatherResponse.ok)throw new Error("Weather request failed");
  const weatherData=await weatherResponse.json(),current=weatherData.current;
  result.innerHTML="<h3>"+place.name+"</h3>"+"Temperature: "+current.temperature_2m+" °C<br>"+"Humidity: "+current.relative_humidity_2m+" %<br>"+"Wind Speed: "+current.wind_speed_10m+" km/h";
 }catch(error){result.textContent="Unable to get weather. Check your internet.";}
}
