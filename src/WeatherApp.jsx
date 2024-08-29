import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';
import "./WeatherApp.css";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        
            city:"WonderLand",
            feelsLike: 34.66,
            humidity: 79,
            temp: 29.05,
            tempMax: 29.05,
            tempMin: 29.05,
            weather: "mist"
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
            <>
                <h1 style={{textAlign:"center"}}>WeatherWise</h1>
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info={weatherInfo}/>
            </>
            
    )
}