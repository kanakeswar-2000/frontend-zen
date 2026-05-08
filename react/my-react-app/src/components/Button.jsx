
const Button=(props)=>{
    const {color}=props
    return <div>
        <button className={color}>{color}</button>
    </div>
}
export default Button