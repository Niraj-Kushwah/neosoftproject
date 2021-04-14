import {useState,useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Signup from './Signup'
import Login from './Login'
import Cakedetails from './Cakedetails'
import Search from './Search'

function App() {

  var [users,setUsers]=useState()
  var [loginstatus,setloginstatus]=useState(false)
  function LoginDone(data)
  {
    setUsers(data)
    setloginstatus(true)
  }
  return (
    <div className="App">
     <div className="container-fluid">
        <Navbar user={users} loginstatus={loginstatus}> </Navbar>
        <div className="row">
          <Login informlogin={LoginDone}/>
          <Signup/>
        </div>
          <Carousel/>
          <Home/>
          <Search/>
          <Cakedetails/>
     </div>     
    </div>
  );
}

export default App;
