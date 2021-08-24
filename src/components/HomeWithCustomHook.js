import useFetch from "../useFetch";
import Bloglist from "./Bloglist";

const HomeWithCustomHook = () => {

    var {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');  //useFetch is our custom hook


    return ( 
        <div className='home'>
            { error && <h2 style={{textAlign: 'center'}}>{ error }</h2>}
            { isPending && <h2 style={{textAlign: 'center'}}>Loading...</h2> }
            { blogs && <Bloglist blogs={blogs} title="All Blogs" /> }
        </div>
     );
}
 
export default HomeWithCustomHook;
