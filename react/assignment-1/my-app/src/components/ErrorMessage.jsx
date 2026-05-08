
const ErrorMessage=(props)=>{
    const {msgType,msgText}=props
    return <div class={`each-alert ${msgType}`}>
        {msgText}
    </div>
}

export default ErrorMessage