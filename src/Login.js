import {useState,useEffect} from "react"
import axios from "axios"
function Login(props)
{

    useEffect(()=>{
       
    },[])
	
    var [errorMessage,setErrorMessage]=useState()

    var [user,setUser]=useState({})

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

    let login = ()=>{
        // if(user.email=="test@gmail.com" && user.password=="test"){
        //     setErrorMessage("Login Successfully")
        // }
        // else{
        //    setErrorMessage("Invalid Login")
        // }
        // console.log("...... user details" ,user)
        let apiurl="https://apibyashu.herokuapp.com/api/login"
           axios({
                url:apiurl,
                method:"post",
                data:user
           }).then((response)=>{
              console.log("Response from Login api",response.data)
              if(response.data.token)
              {
                setErrorMessage("Login Successfully")
                props.informlogin("Neeraj Kushwah")
              }else
              {
                setErrorMessage("Invalid Login")
              }
           },(error)=>{
              console.log("Error from Login api",error)  
           })
       
    }
	
		return(
            
			<div style={{width:"50%" , margin:"auto"}} className="col-md-6">
              <h2> Login Section </h2>
                <div className="form-group">
                    <label>Email</label>
                <input type="email" class="form-control" onChange={getEmail}></input>
                   { user && <label>{user.email}</label> }
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="password" class="form-control" onChange={getPassword}></input>
                   {user && <label>{user.password}</label> }
                </div>
                <div style={{color:"red"}}>
                    {errorMessage}
                </div>
              <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
		)
	
}

export default Login;