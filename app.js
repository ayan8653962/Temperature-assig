
    async function getTemp() {
      const city = document.getElementById("city").value;
      const apiKey = "0b2ad3c8775c1f7d08c931539c167cb9"; // <-- apni API key yahan daalo
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();
      
      if (data.cod === 200) {
        document.getElementById("temp").innerText = 
          `Temperature in ${city}: ${data.main.temp}°C`;
      } else {
        document.getElementById("temp").innerText = "City not found!";
      }
    }


