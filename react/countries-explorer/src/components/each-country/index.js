import "./index.css"

const EachCountry=(props)=>{
    const {countryDetails}=props
    const {name}=countryDetails
    return <li className="each-country">
        <h1>{name.common}</h1>
    </li>
}
export default EachCountry