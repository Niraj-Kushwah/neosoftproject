
import React, { useState, useEffect } from 'react';
import Cake from './Cake'
import Carousel from './Carousel'
import cakesfromdatafile from './data.js'
import axios from "axios"
var carousel_card="carousel_card.jpeg"
var obj={
	name:"cnb",
	image:"carousel_card.jpeg"
}

/*{ cakesfromdatafile?.length > 0 && cakesfromdatafile.map((each, index)=>{
            return (<Cake cakedat={each} key={index}/>)
          })
        }*/

function Home() {
  
  let [cakes,setCakes]=useState([])
  let apiurl="https://apibyashu.herokuapp.com/api/allcakes"

  useEffect(() => {
        axios({
            url:apiurl,
            method:"get",
       }).then((response)=>{
          console.log("Response from AllCakes api",response.data)
          setCakes(response.data.data)
       },(error)=>{
          console.log("Error from AllCakes api",error)  
       })
  },[]);
           

  return ( 
    <>
    <Carousel/> 
    <div>
        <h2>All Cakes Section</h2>
	    <div className="row" style={{ paddingLeft:"30px"}}>
		    { cakes?.length > 0 && cakes.map((each, index)=>{
		          return (<Cake cakedat={each} key={index}/>)
		        })
		    }
	   </div>
	</div>
  </>
    /*<Cake name="cakes1" image={carousel_card}/>  with direct props  
    <Cake cakedat={obj}/>  with object pass as a props */ 
  );
}

export default Home;
