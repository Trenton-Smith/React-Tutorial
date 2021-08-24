import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";


const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick= () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then( () => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <h2 style={{textAlign: 'center'}}>Loading...</h2> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2 style={{color: '#f1356d'}}>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <p style={{paddingTop: '1rem', textIndent: '15px'}}>{ blog.body }</p>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
            {/* <h2>Blog Details: <span style={{color: '#f1356d'}}>{ id }</span></h2> */}
        </div> 
     );
}
 
export default BlogDetails;