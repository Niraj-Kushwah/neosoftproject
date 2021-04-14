var img="carousel_card.jpeg";

function Cakedetails(props) {
  return (
    <div className="cakedetails" style={{ marginTop:"20px",paddingLeft:"30px"}}>
    <h2>Cake Details Section</h2>
	    <div className="row">
         <div className="col-md-6">
           <img src={img} style={{height:"250px",width:"390px"}} className="card-img-top" alt="..." />
         </div>

         <div className="col-md-6">
           <p>NAME:- Choclate Cake </p>           
           <p>PRICE:-200/- Rs Only</p>
           <p>INGRIDIENTS:-Cake,Cream,Choco Chips</p>
           <p>DESCRIPTIONS:-Chocolate layer cake – A cake made from stacked layers of cake held 
           ogether by filling. Black Forest gateau – A chocolate sponge cake with a 
           herry filling. Chocolate soufflé cake – A baked egg-based dish using beaten 
           egg whites to give an aerated texture.</p>
           <button className="form-control btn btn-success">Buy Now</button> 
         </div>
	      </div>
      </div>
  );
}

export default Cakedetails;
