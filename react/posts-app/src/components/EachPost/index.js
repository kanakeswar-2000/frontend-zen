import "./index.css"

const EachPost=(props)=>{
    const {postDetails}=props
    const {title,body}=postDetails
    return <li className="each-post">
        <p class="title">{title}</p>
        <p>{body.slice(0,100)}....</p>
    </li>
}
export default EachPost

/* Learning Points
    1.Didn't remember slice method to limit sentence chars
*/