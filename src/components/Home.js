// // const Home = () => {

// //     // example function without parameters
// //     const handleClick = (e) => {
// //         console.log('hello, ninjas');
// //         console.log(e);
// //     }

// //     // example function with parameters
// //     const handleClickAgain = (name, e) => {
// //         console.log('hello ' + name);
// //         console.log(e);
// //     }

// //     return ( 
// //         <div className="home">
// //             <h2>Homepage</h2>
// //             <button onClick={handleClick}>Click me!</button>
// //             <button onClick={(e) => handleClickAgain('Mario', e)}>No, click me!</button>
// //         </div>
// //      );
// // }
 
// // export default Home;

// // ***************************************************** example 2 below

// // import { useState } from "react";

// // const Home = () => {

// //     const [name, setName] = useState('Mario'); // state hook

// //     const handleClick = () => {
// //         console.log(name);
// //     }
// //     const handleClickAgain = (val) => {
// //         if (name === 'Luigi'){
// //             setName('Mario');
// //         } else {
// //             setName(val);
// //         }
// //     }

// //     return ( 
// //         <div className="home">
// //             <h2>Hello, Ninjas!</h2>
// //             <p>{name} is a cool guy!</p>
// //             <button onClick={handleClick}>Console Log!</button>
// //             <button onClick={() => handleClickAgain('Luigi')}>Change Name!</button>
// //         </div>
// //      );
// // }
 
// // export default Home;

// import { useState, useEffect } from "react";
// // import useFetch from "../useFetch";
// import Bloglist from "./Bloglist";

// const Home = () => {

//     // pre-baked state (no longer needed since using db.json)
//     // const [blogs, setBlogs] = useState([
//     //    {title: 'Blog_1 is a New Blog', body: 'lorem ipsum... 1', author: 'Mario', id: 1}, 
//     //    {title: 'Blog_2', body: 'lorem ipsum... 2', author: 'Luigi', id: 2}, 
//     //    {title: 'Blog_3', body: 'lorem ipsum... 3', author: 'Mario', id: 3}
//     // ]);

//     const [blogs, setBlogs] = useState(null);

//     const handleBlogClose = (id) => {
//         const newBlogs = blogs.filter(blog => blog.id !== id);
//         setBlogs(newBlogs);
//     }

//     // runs on every change of state and/or re-render of the DOM
//     // warning - do NOT change state: triggers endless loop of re-render -> useEffect -> re-render...   
//     // useEffect(() => {
//     //     console.log('use effect triggered');
//     // });

//     // useEffect(() => {
//     //     console.log('use effect triggered');
//     // }, []); // renders only on initial load of the DOM using empty array

//     const [name, setName] = useState('Mario');

//     // const handleNameChange = (p_name) => {
//     //     if (p_name === 'Mario') {
//     //         setName('Luigi');
//     //     } else {
//     //         setName('Mario');
//     //     }
//     // }

//     useEffect(() => {
//         console.log('use effect triggered');
//     }, [name]); // will run on initial load + only on future changes to name state

//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);

//     // this will make an initial GET request (fetch) for the data from our db.json file which
//     //      is hosted on port 8000, under the "blogs" entry point
//     // then, it will run a function
//     useEffect(() => { 
//         setTimeout(() => {  // DO NOT DO THIS for real, this is to simulate the time for a db/web api lookup
//             fetch('http://localhost:8000/blogs') // e.g. "http://localhost:8000/blogs"
//                 .then(res => {
//                     console.log(res);
//                     if (!res.ok) {  // if the response is NOT okay, then throw an error
//                         throw Error("Oh no! The server is causing mischief again...");
//                     } 
//                     return res.json();  // returns a response object, then converts object to usable data with json method
//                 })
//                 .then(data => {  // once we have the data, we can interact with it
//                     console.log(data);
//                     setBlogs(data);  // will load the data into blogs *NOTE* this will OVERRIDE the default 
//                                     //     values for blogs which were hardcoded into this component
//                     setIsPending(false);  // will cause the h2 div below to stop rendering 
//                     setError(null);
//                 })
//                 .catch(err => {
//                     console.log(err);
//                     setIsPending(false);
//                     setError(err.message);
//                 });
//         }, 1000); // 1000ms = 1s delay prior to running fetch
//     }, []); // runs on initial load of DOM and subsequent changes to the url (for GET requests)

//     return ( 
//         <div className='home'>
//             {/* <button onClick={() => handleNameChange(name)}>Change the name!</button>
//             <p>{ name }</p> */}
//             { error && <h2 style={{textAlign: 'center'}}>{ error }</h2>}
//             { isPending && <h2 style={{textAlign: 'center'}}>Loading...</h2> }
//             { blogs && <Bloglist blogs={blogs} title="All Blogs" handleBlogClose={handleBlogClose} /> }
//             {/* <Bloglist blogs={blogs.filter(blog => blog.author === 'Mario')} 
//                 title="Mario's Blogs" 
//                 handleBlogClose={handleBlogClose} /> */}
//         </div>
//      );
// }
 
// export default Home;

// // *NOTE* checking blogs for true (!=== null) PRIOR to rendering <Bloglist blogs...> allows us to not need
// //        pre-baked values into blogs. React will not render the Bloglist component prior to blogs becoming true