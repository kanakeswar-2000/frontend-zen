import SuccessMessage from "./SuccessMessage"
import WarningMessage from "./WarningMessage"
import ErrorMessage from "./ErrorMessage"
import InfoMessage from "./InfoMessage"
const AlertMessage=()=>{
    return <div>
        <SuccessMessage msgType="success" msgText="Success Message"/>
        <WarningMessage msgType="warning" msgText="Warning Message"/>
        <ErrorMessage msgType="error" msgText="Error Message"/>
        <InfoMessage msgType="info" msgText="Info Message"/>
    </div>
}
export default AlertMessage