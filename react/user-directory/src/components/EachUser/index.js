import "./index.css"

const EachUser=(props)=>{
    const {userDetails}=props
    const {name,email,company}=userDetails
    return <li className="user-card">
        <p> {name}</p>
        <p> {email}</p>
        <p> {company.name}</p>
    </li>
}
export default EachUser
