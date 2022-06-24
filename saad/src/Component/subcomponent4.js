import './subcomponent4.css';
import React, { useState } from "react";

function Subscribe(){
    const[email,setEmail]=useState("");
    const [message, setMessage] = useState("");

    const emailValidation=()=>{
        const regEx= /[a-zA-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z]{2,8}])?/g
if (regEx.test(email)){
    setMessage("Email Valid");
}else if (!regEx.test(email)&& email!=""){
setMessage("Email Invalid");
}else{
    setMessage("");
}
    };

    const handleOnChange=(e)=>{
        setEmail(e.target.value);
            };
            return(
        <div class ="Contactus" id="Contactus">
	<h1 class="	title"> Contact Us</h1>
                    <div className="form-input">
                        <input className="form-input"  type='email' placeholder="example@email.com" value={email} onChange={handleOnChange}/>
                        </div>
                        <div class="form-input">
	<textarea placeholder="Message"></textarea>	
            </div>
            <div class="form-input">
	<input type="text" placeholder="Subject"/>
</div>
<div class="form-input"></div>
           <div className="btm">
                        <a href="#" onClick={emailValidation}>Submit</a>
                        </div>

                
                    <div className="message">
                        {message}
                    </div>
        
                </div>
            )
        }
        
        export default Subscribe;