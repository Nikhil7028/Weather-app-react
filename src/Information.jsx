import * as React from 'react';
import Card from '@mui/material/Card';
import WeatherImg from './WeatherImg';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Typography from '@mui/material/Typography';

export default function Information({info}){
  if (!info || Object.keys(info).length === 0) {
    return <p>Enter a city to get weather details.</p>;
  }

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={WeatherImg[info.weather]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Weather Information for {info.city} <AcUnitIcon />
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span"> 
          <p> <b>Weather: </b> { info.weather }</p>
          <p><b> Temperture: </b> { info.temp }°C</p>
          <p> <b>Min Temp: </b>{ info.tempMin }°C</p>
          <p> <b> Max Temp: </b>{ info.tempMax }°C</p>
          <p> <b> Humidity: </b> { info.humidity }%</p>
          <p> <b> Feels like: </b> { info.feelsLike }°C</p>
          
          
          
        </Typography>
      </CardContent>
    </Card>
 
    // <div>
    //   <h3>Weather Info for {info.city}</h3>
    //   <p>Weather: {info.weather}</p>
    //   <p>Temperature: {info.temp}°C</p>
    //   <p>Max Temp: {info.tempMax}°C</p>
    //   <p>Min Temp: {info.tempMin}°C</p>
    //   <p>Humidity: {info.humidity}%</p>
    //   <p>Feels Like: {info.feelsLike}°C</p>
    // </div>
  );
}