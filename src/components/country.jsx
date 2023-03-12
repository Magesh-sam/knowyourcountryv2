import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../Styles/country.css'
import {useNavigate} from 'react-router-dom'
import { v4 as countryid } from 'uuid'

const baseURL ="https://restcountries.com/v3.1/all"

export default function Country({countries,setcountries,searchcountry , setsearchcountry,setcountrydetail}) {

const [loading, setloading] = useState(false)


const nav = useNavigate()

const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchcountry.toLowerCase())
  )

useEffect(() => {
    setloading(true)
    const getCountry = async () => {
        const response = await axios.get(baseURL)
        const country = response.data;
        
     
    
        setloading(false)
        setcountries(country)
        
        
        


    }
    getCountry();
},[])

const handleknowmore = (e) => {
    const value = parseInt(e.target.value)
   
    
   setcountrydetail(...countries.filter(country => country.area === value) )
   
    

    nav('/country')
   

}

if(loading){
    return <div className='loader'>
        <h1>Loading...</h1>
    </div>
}


  return (
    <div className='countryapp'>
        <h1>Country App</h1>
        <input  id='searchcountry' type="search" placeholder='Country name' value={searchcountry} onChange={(e)=>setsearchcountry(e.target.value)} />
   <div className='countrylist'>
       {countries.map((country,index)=>(
        <div className='country' key={index} >
            <h1>{country.name.common}</h1>
            <img className='flag' src={country.flags.png} alt={country.flags.alt} />
            <div className='currency'>

            {country.currencies && Object.values(country.currencies).map((currency, index) => (
               
            <h3 className='nameandsymbol'  key={index}> currency {index+1} {currency.symbol} - {currency.name}</h3>
           
        ))}
        </div>
        <button value={country.area} onClick={handleknowmore} className='knowmorebtn'>Know More</button>
        </div>
       ))}
   </div>
   </div>
  )
}
