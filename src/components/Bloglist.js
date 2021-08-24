import { useState } from "react";
import { Link } from "react-router-dom";


const Bloglist = ({blogs, title, handleClose}) => {

    /* if not using deconstructed props, but just props keyword as parameter */
    // const blogs = props.blogs;
    // const title = props.title;

    const [blogList, setBlogList] = useState(blogs);
    const [bannedBlogs, setBannedBlogs] = useState([0]);

    const handleBlogClose = (id) => {
        let newArr = bannedBlogs.slice();
        newArr.push(id);
        setBannedBlogs(newArr);

        const newBlogs = blogs.filter( (blog) => !newArr.includes(blog.id));
        console.log(newBlogs);
        setBlogList(newBlogs);
    }

    return ( 
        <div className="bloglist">
            <h2 style={{textAlign: 'center'}}>{title}</h2>
            {blogList.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                        <div className="blogheader" style={{display: "flex", justifyContent: 'flex-end'}}>
                            <Link to={`/blogs/${blog.id}`} style={{textDecoration: 'none'}}>
                                <h2>{ blog.title }</h2>
                            </Link>
                            <button onClick={() => handleBlogClose(blog.id)} style={{marginLeft: 'auto',
                                background: 'none',
                                border: 'none',
                                fontSize: '20px',
                                color: '#f1356d',
                                }}>X</button>
                        </div>
                        <h4>Written by { blog.author }</h4>
                        <p style={{
                            maxHeight: '4.3rem',
                            wordWrap: 'break-word',
                            textOverflow: 'ellipsis',
                            marginRight: '1rem',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            }}>{ blog.body }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;