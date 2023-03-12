import { useState,  useRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Country from './components/country'
import CountryDetails from './components/countryDetails'
import ScrollToTop from "react-scroll-to-top";


function App() {
  const [countries, setcountries] = useState([])
  const [searchcountry, setsearchcountry] = useState('')
  const [countrydetail, setcountrydetail] = useState([])
 

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchcountry.toLowerCase())
  )



  


  return (
    <BrowserRouter>
      
    <Routes>
      <Route path='/' element={
    <Country countries={filteredCountries} setcountries={setcountries}  searchcountry={searchcountry}  setsearchcountry={setsearchcountry} setcountrydetail={setcountrydetail} />

      } ></Route>
      <Route path='/country' element={<CountryDetails countries={countries} countrydetail={countrydetail}  />} ></Route>
    </Routes>
    <ScrollToTop className='backtotop' smooth/>
    </BrowserRouter>
  )
}

export default App
