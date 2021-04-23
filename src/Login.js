import {useState,useEffect} from "react"
import axios from "axios"
import { Link ,withRouter} from "react-router-dom"

import { connect } from "react-redux";
function Login(props)
{

    useEffect(()=>{
       
    },[])
	
    var [errorMessage,setErrorMessage]=useState()

    var [user,setUser]=useState({})
    var [formerrors,setFormerrors]=useState({})

    let getEmail=(event)=>
    {
        setUser({
            ...user,
            email:event.target.value,
            //password:user.password,
        })
        
    	user.email = event.target.value
    }
    let getPassword=(event)=>
    {
        setUser({
            // email:user.email,
            ...user,
            password:event.target.value,
        })
        
    	user.password = event.target.value
    }

   var validate=function(elements)
   {
      var errors={}
      //console.log("elements recieved for validation",elements,elements.name)
      if(!elements.email.value)
      {
        errors.email="Email is Required"
      }
      if(!elements.password.value)
      {
        errors.password="Password is Required"
      }
      var errorkeys=Object.keys(errors)
      if(errorkeys.length>0)
        return errors
      else
        return false
   }

    let login = ()=>{
        // if(user.email=="test@gmail.com" && user.password=="test"){
        //     setErrorMessage("Login Successfully")
        // }
        // else{
        //    setErrorMessage("Invalid Login")
        // }
        // console.log("...... user details" ,user)

        var form=document.getElementById('loginform')
          console.log("form element in this",form.elements,form.controls)
        var errors=validate(form.elements)
        if(errors)
        {
            setFormerrors(errors)
        }else{
            setFormerrors({})
            alert("Form Validate successfully")
            let apiurl="https://apibyashu.herokuapp.com/api/login"
           axios({
                url:apiurl,
                method:"post",
                data:user
           }).then((response)=>{
              console.log("Response from Login api",response.data)
              if(response.data.token)
              {
                localStorage.token=response.data.token
                localStorage.email=response.data.email
                setErrorMessage("Login Successfully")
                props.dispatch({
                    type:"LOGIN",
                    payload:response.data
                }) 
                // props.informlogin("Neeraj Kushwah")
                props.history.push("/")
              }else
              {
                setErrorMessage("Invalid Login")
              }
           },(error)=>{
              console.log("Error from Login api",error)  
           })
        }       
    }
	
		return(
          <div style={{width:"50%" , margin:"auto"}} className="col-md-6">
              <h2> Login Section </h2>
            <form id="loginform">  
                <div className="form-group">
                    <label>Email</label>
                <input type="email" name="email" class="form-control" onChange={getEmail}></input>
                   { user && <label>{user.email}</label> }
                </div>
              {formerrors?.email && <div className="formerrors">{formerrors.email}</div>}  
                <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" class="form-control" onChange={getPassword}></input>
                   {user && <label>{user.password}</label> }
                </div>
              {formerrors?.password && <div className="formerrors">{formerrors.password}</div>}   
                <div style={{color:"red"}}>
                    {errorMessage}
                </div>
                <div style={{ float:"left"}}>
                  <Link to="/signup">New User! Click Here</Link>
                </div>
                <div style={{ float:"right"}}>
                  <Link to="/forgot">Forgot Password</Link>
                </div>
            </form>
              <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
		)
	
}

Login = withRouter(Login)
  export default connect(function(state,prop){  
})(Login)