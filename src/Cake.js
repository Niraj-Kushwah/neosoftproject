
function Cake(props) {
  return (
    <div className="card">
    	<img src={props.cakedat.image} style={{ width: "18rem",height:"200px" }} className="card-img-top" alt="..." />
    	<p><h3>{props.cakedat.name}</h3></p>
    </div>	


    /*<img src={props.image} className="card-img-top" alt="..." /> use direct props 
	<img src={props.cakedat.image} className="card-img-top" alt="..." /> use direct props*/ 
  );
}

export default Cake;
