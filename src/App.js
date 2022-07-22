import logo from './logo.svg';
import React,{useEffect,useState} from 'react';
import GlobalStats from './components/global';
import './App.css';
import CountriesStats from './components/countriesStats';

import Search from './components/search';

function App() {

  const [globalStats, setGlobalStats] = useState('')
  const [countiresStats, setCountriesStats] = useState([]);
  useEffect(()=>{

  let url = "https://api.covid19api.com/summary";

  fetch (url)
  .then((response)  => response.json().
  then((data)=>{
    console.log(data);
    setGlobalStats(data.Global)

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

      <GlobalStats  global={globalStats}/>
      <Search search={searchCountry}/>
      <CountriesStats countries={countiresStats}/>
    </div>
  );
}

export default App;
