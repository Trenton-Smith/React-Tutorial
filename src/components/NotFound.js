import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry, that page is lost in the nether</h2>
            <p>Perhaps you better go back to the <Link to="/">homepage...</Link></p>
            
        </div>
     );
}
 
export default NotFound;