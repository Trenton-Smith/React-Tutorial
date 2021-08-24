import { useEffect, useState } from "react";    

const useFetch = (url) => {    

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // this will make an initial GET request (fetch) for the data from our db.json file which
    //      is hosted on port 8000, under the "blogs" entry point
    // then, it will run a function
    useEffect(() => { 
        const abortController = new AbortController();

        setTimeout(() => {  // DO NOT DO THIS for real, this is to simulate the time for a db/web api lookup
            fetch(url, {signal: abortController.signal}) // e.g. "http://localhost.8000/blogs"
                .then(res => {
                    // console.log(res);

                    if (!res.ok) {  // if the response is NOT okay, then throw an error
                        throw Error("Oh no! The server is causing mischief again...");
                    } 
                    return res.json();  // returns a response object, then converts object to usable data with json method
                })
                .then(data => {  // once we have the data, we can interact with it
                    // console.log(data);

                    setData(data);  // will load the data into blogs *NOTE* this will OVERRIDE the default 
                                    //     values for blogs which were hardcoded into this component
                    setIsPending(false);  // will cause the h2 div below to stop rendering 
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch hook aborted');
                    } else {
                        console.log(err);
                        setIsPending(false);
                        setError(err.message);
                    }
                });
        }, 1000); // 1000ms = 1s delay prior to running fetch

        return () => abortController.abort();  // this is needed to avoid attempting to change the state for a page already navigated away from (quickly)
    }, [url]); // runs on initial load of DOM and subsequent changes to the url (for GET requests)

    return {data, isPending, error}
}

export default useFetch;