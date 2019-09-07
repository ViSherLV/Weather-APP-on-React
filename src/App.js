import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "f7c234360d93fb952789103085493bce";

export default class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    presure: undefined,
    error: undefined
  }

gettingWeather = async (e) =>{
  e.preventDefault();
  const city = e.target.elements.city.value;
if(city){

const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
const data = await api_url.json();

if(data.cod==200){
var sunrise = data.sys.sunrise;
var date = new Date();
date.setTime(sunrise);
var sunrise_date = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

this.setState({
  temp: (data.main.temp - 273),
  city: data.name,
  country: data.sys.country,
  pressure: data.main.pressure,
  sunrise: sunrise_date,
  error: undefined
});
}else {
  this.setState({
    error: "Enter the name of the city"
  })
}
} else {
  this.setState({
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    presure: undefined,
    error: "Enter the name of the city"
  })
}

}

  render(){
    return (
      <div className="wrapper">
      <div className="main">
       <div className="container">
       <div className="row">
       <div className="col-sm-5 info"><Info/></div>
       <div className="col-sm-7 form"><Form weatherMethod={this.gettingWeather}/>
       <Weather {...this.state}
       /></div>
       </div>
       </div>

       </div>

      </div>
    );
  }
}
