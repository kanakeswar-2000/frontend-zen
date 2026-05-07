const nameRegex = /^[A-Za-z]+$/;
const mobileRegex = /^[0-9]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

let color1=document.getElementById("color1");
let color2=document.getElementById("color2");
let firstName=document.getElementById("firstname");
let lastName=document.getElementById("lastname");
let form=document.getElementById("form");
let password=document.getElementById("password");
let mobile=document.getElementById("mobile");
let email=document.getElementById("email");
let confirmPassword=document.getElementById("confirm-password");
let dob=document.getElementById("dob")
let terms=document.getElementById("terms")

color1.addEventListener("change",(e)=>{
    document.body.style.backgroundImage=linear-gradient(e.target.value,color2.value )
})

const setError=(id,message)=>{
    document.getElementById(id).textContent=message
}

const validateName=(name,errorId)=>{
    if(!name) return setError(errorId,"Required");
    if(!nameRegex.test(name)) return setError(errorId,"Invalid Value")
    setError(errorId,"")
    return true
}

const validateMobile=(mobile)=>{
    if(!mobile) return setError("mobile-alert","Required")
    if(!mobileRegex.test(mobile)) return setError("mobile-alert","Invalid Value")
    setError("mobile-alert","")
    return true
}

const validateEmail=(email)=>{
    if(!email) return setError("email-alert","Required")
    if(!emailRegex.test(email)) return setError("email-alert","Invalid Value")
    setError("email-alert","")
    return true
}

const validatePassword=(password)=>{
    if(!password) return setError("password-alert","Required")
    if(!passwordRegex.test(passwordRegex)) return setError("password-alert","Invalid Value")
    setError("password-alert","")
    return true
}

const validateConfirmPassword=(password,password2)=>{
    if(!password2) return setError("password2-alert","Required")
    if(password!==password2){
        return setError("password2-alert","Password doesn't match")
    }
    setError("password2-alert","")
    return true
}

const validateGender=()=>{
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) return setError("gender-alert", "Required");
    setError("gender-alert");
    return true;
}

const validateDob=(dob)=>{
    if(!dob) return setError("dob-alert","Required")
    const year=new Date(dob).getFullYear()
    if (year <2002 ) return setError("dob-alert","Invalid value")
    setError("dob-alert","")
    return true
}

const validateTerms=()=>{
    if(!terms.checked) return setError("terms-alert","Required")
    setError("terms-alert","")
    return true
}

firstName.addEventListener("blur",(e)=>{
    validateName(e.target.value,"firstname-alert")
})

lastName.addEventListener("blur",(e)=>{
    validateName(e.target.value,"lastname-alert")
})

mobile.addEventListener("blur",(e)=>{
    validateMobile(e.target.value)
})

email.addEventListener("blur",(e)=>{
    validateEmail(e.target.value)
})

password.addEventListener("blur",(e)=>{
    validatePassword(e.target.value)
})

confirmPassword.addEventListener("blur",(e)=>{
    validateConfirmPassword(password.value,e.target.value)
})

dob.addEventListener("blur",(e)=>{
    validateDob(e.target.value)
})

terms.addEventListener("change",()=>{
    validateTerms()
})

form.onsubmit=(e)=>{
    e.preventDefault()
        validateName(firstName.value,"firstname-alert")
        validateName(lastName.value,"lastname-alert") 
        validateEmail(email.value)
        validatePassword(password.value)
        validateMobile(mobile.value)
        validateConfirmPassword(password.value,confirmPassword.value)
        validateGender()
        validateDob(dob.value)
        validateTerms()
    const isValid=
        validateName(firstName.value,"firstname-alert")&&
        validateName(lastName.value,"lastname-alert") &&
        validateEmail(email.value)&&
        validatePassword(password.value)&&
        validateMobile(mobile.value)&&
        validateConfirmPassword(password.value,confirmPassword.value)&&
        validateGender()&&
        validateTerms()
    if(isValid){
        alert("Submitted")
        console.log({firstName:firstName.value,
                lastName:lastName.value,
                mobile:mobile.value,
                email:email.value,
                password:password.value})
    }else{
        alert("Invalid Values")
    }
}   