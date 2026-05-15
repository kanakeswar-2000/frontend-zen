import "./index.css"
import { useState,useEffect } from "react"
import EachCountry from "../each-country"
const CountriesList=()=>{
    const [countriesList,setCountriesList]=useState([])
    const [country,setCountry]=useState("")
    const [capital,setCapital]=useState("")

    useEffect(()=>{
        const getData=async ()=>{
            const response=await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies")
            const data=await response.json()
            setCountriesList(data)
        }
        getData()
    },[])

    const onChangeCountry=(e)=>{
        setCapital("")
        setCountry(e.target.value)
    }

    const onChangeCapital=(e)=>{
        setCountry("")
        setCapital(e.target.value)
    }
     
    const filteredCountries=countriesList.filter(eachCountry=>eachCountry.name.common.toLowerCase().startsWith(country.toLowerCase()))
    
    
    return <div>
        <h1>Counties List</h1>
        <div>
             
            <input type="text" placeholder="Search by Country" id="country"
                value={country} onChange={onChangeCountry}/>
            <select value={capital} onChange={onChangeCapital} placeholder="Search by Capital">
                {
                    countriesList.map(eachCountry=>{
                        return <option value={eachCountry.capital[0]}>{eachCountry.capital[0]}</option>
                    })
                }
            </select>
        </div>
        <ul className="countries-container">
            {
                 filteredCountries.map(eachCountry=><EachCountry countryDetails={eachCountry}/>)
            }
        </ul>
    </div>
}
export default CountriesList