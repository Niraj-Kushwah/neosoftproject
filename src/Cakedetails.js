
import React from 'react'
import axios from 'axios'
import {useEffect , useState} from "react";
import {useParams} from "react-router-dom";
var img="carousel_card.jpeg";
function Cakedetails(props) {
  let [cakeDetails,setcakeDetails]=useState([])
    let  params= useParams()
      useEffect(()=>{
          let allcakedetailapi="http://apibyashu.herokuapp.com/api/cake/"+params.cakeid
          axios({
          url:allcakedetailapi,
          method:"get"
          
      }).then((response)=>{
          console.log("response from  cake details  api" ,response.data)
          setcakeDetails(response.data.data)
      },(error)=>{
          console.log("error from cake details api",error)
      })
      },[])

  return (
    <div className="cakedetails" style={{ marginTop:"20px",paddingLeft:"30px"}}>
    <h2>Cake Details Section</h2>
	    <div className="row">
         <div className="col-md-6">
           <img src={cakeDetails.image} style={{height:"250px",width:"390px"}} className="card-img-top" alt="..." />
         </div>

         <div className="col-md-6">
           <p>NAME:- {cakeDetails.name} </p>           
           <p>TYPE:- {cakeDetails.type} </p>           
           <p>LIKES:- {cakeDetails.likes} </p>           
           <p>REVIEWS:- {cakeDetails.reviews} </p>           
           <p>RATINGS:- {cakeDetails.ratings} </p>           
           <p>PRICE:-{cakeDetails.price}/- Rs Only</p>
           <p>INGRIDIENTS:-{cakeDetails.ingredients}</p>
           <p>DESCRIPTIONS:-{cakeDetails.description}</p>
           <button className="form-control btn btn-success">Buy Now</button> 
         </div>
	      </div>
      </div>
  );
}

export default Cakedetails;
