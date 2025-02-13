
import './SearchBox.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import WeatherImg from './WeatherImg';
export default function SearchBox({updateData}){
  let result={};
  let [city, setCity]= useState('');
  
  let onSubmit=(event)=>{
      // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    

      let getWeatherInfo= async ()=>{
        try {
            let response= await fetch(`${WeatherImg['API_URL']}?q=${city}&appid=${WeatherImg['API_KEY']}&units=metric`);
            let jsonResponse= await response.json();
            result={
              city: city,
              temp: jsonResponse.main.temp,
              tempMax: jsonResponse.main.temp_max,
              tempMin: jsonResponse.main.temp_min,
              humidity: jsonResponse.main.humidity,
              feelsLike: jsonResponse.main.feels_like,
              weather: jsonResponse.weather[0].description,
            }
          console.log(jsonResponse);
          updateData(result);
        }catch (error) {
          alert(`No such city found`)
        }
        
        
      }
    
    
      event.preventDefault();
      getWeatherInfo();

      setCity('');

    }
  
 
  let onChangeHandle=(event)=>{
    let newCity= event.target.value;
    setCity(newCity);
  }

  return(
    <div className="searchBox">
      <h2>Weather App</h2>
      <form onSubmit={onSubmit}>
      <TextField id="City" label="City Name:" variant="outlined"
      onChange={onChangeHandle}
      value={city}
      required/>
      <br /> <br />
      <Button variant="contained" type='submit' size='large' >
        Search
      </Button>
      </form>      
    </div>
  );
}