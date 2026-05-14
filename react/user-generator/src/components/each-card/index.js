import "./index.css"

const EachCard=(props)=>{
    const {userDetails}=props
    const {name,gender,email,location,picture}=userDetails
    const {first,last}=name
    const {city,country}=location
    const {large}=picture
return <li class="each-card">
        <h1>{first} {last} </h1>
        <p>{gender.toUpperCase()}</p>
        <p>{email}</p>
        <p>{city} , {country}</p>
        <img src={large} alt={first}/>
    </li>
}
export default EachCard