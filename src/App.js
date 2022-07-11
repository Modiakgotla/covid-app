import logo from './logo.svg';
import React,{useEffect,useState} from 'react';
import WorldStats from './components/World'
import './App.css';
import CountriesStats from './components/countriesStats';

import Search from './components/search';

function App() {

  const [worldStats, setworldStats] = useState('')
  const [countiresStats, setCountriesStats] = useState([]);
  useEffect(()=>{

  let url = "https://api.covid19api.com/summary";

  fetch (url).then((response)  => response.json().then((data)=>{
    console.log(data);
    setworldStats(data.world)

    setCountriesStats(data.Countries)
  }))

}, [])

const searchCountry = ((text)=>{
let value = text.toLowercase();

let result = [];

result = CountriesStats.filter((countries)=> {
return countries.Counrty.toLowercase().indexOf(value)!==1
});

setCountriesStats(result);
})
  return (
    <div className="App">

      <WorldStats  world={worldStats}/>
      <Search search={searchCountry}/>
      <CountriesStats countries={countiresStats}/>
    </div>
  );
}

export default App;
