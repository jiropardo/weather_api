// Openweathermap API. Do not share it publicly.
const api ='bb764836f3c8d41f5d6931a8372047d8';

const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');


window.addEventListener('load', () => {
    let lon;
    let lat;
    let zorro;
    // Accesing Geolocation of User
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Storing Longitude and Latitude in variables
        lon = position.coords.longitude;
        lat = position.coords.latitude;
        console.log(lat);
        console.log(lon);

       base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`

       fetch(base)
        .then((response) => response.json())
        .then(data => {
         zorro = data;
        })
        .then(()=>{
            //console.log(zorro)

            const { temp } = zorro.main;
            console.log(zorro);
            console.log(temp);
            const place = zorro.name;
            console.log(place);
            const { description, icon } = zorro.weather[0];  
            console.log(description);
            console.log(icon);
            const { sunrise, sunset } = zorro.sys;
            console.log(sunrise);
            console.log(sunset);

            //Converting sunrise and sunset to epoch

            const sunrise_show = new Date(sunrise * 1000);
            const sunset_show = new Date(sunset * 1000);
            console.log(sunrise_show);
            console.log(sunset_show);

            //Converting farenheti to celcius

            const celcius = ((temp-32)*5)/9
            console.log(celcius);

          loc.textContent = `${place}`;
          desc.textContent = `${description}`;
          tempC.textContent = `${celcius.toFixed(2)} °C`;
          tempF.textContent = `${temp.toFixed(2)} °F`;
          sunriseDOM.textContent = `${sunrise_show}`;
          sunsetDOM.textContent = `${sunset_show}`;


            
        });

      });
    }
  });


