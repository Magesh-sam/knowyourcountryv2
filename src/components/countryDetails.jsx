    import React from 'react'
    import { useNavigate } from 'react-router-dom'
    import '../Styles/countrydetails.css'

    export default function CountryDetails({countries,countrydetail}) {

        const nav = useNavigate()
        
    
    console.log(countrydetail)

    return (
        <div className='countrydetails' >
        <div className='countryview' >
        
                <h1>{countrydetail.name.common}</h1>
                <img src={countrydetail.flags.png} alt={countrydetail.flags.alt} />
                <div className='currencies'>
                    <h3>Currency</h3>
                {Object.values(countrydetail.currencies).map((currency, index) => (
                
                <h3 className='nameandsymbol'  key={index}>{index+1}: {currency.symbol} - {currency.name}</h3>
                
            ))}
            </div>
            <h3>Capital: {countrydetail.capital}</h3>
            <h3>Continent: {countrydetail.continents}</h3>
            <div className='languages'>
                <h3>Languages:</h3>
            {Object.values(countrydetail.languages).map((language,index) =>(
                <h3 key={language} >{index+1}: {language}</h3>
            ) )}
            </div>
            <h3>Population: {countrydetail.population}</h3>
            <h3>Area: {countrydetail.area} km<sup>2</sup></h3>
            
            <button onClick={()=>{nav('/')}} >Back to Home</button>
        </div>
        </div>
    )
    }
