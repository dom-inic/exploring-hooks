import React, {useState, useEffect} from 'react'

export default function datafetchinghooksuseeffect() {
    const [data, setData] = useState([]);

    useEffect(() => {
//         react hook take in a function, we can make it asyncronous
        const fuctionFetch = async () => {
            const response = await axios.get(api_url);
            setData(response.data);
        }
        fetch("http://localhost:8000//api/users/")
        .then(response => response.json())
        .then(data => setData(data));


        return () => socket.disconnect();
        
// we have to turn an empty array so as the hook to run once
//  this would prevent memory leak in our application
    }, []);
    return (
        <div>
            <ul>
                {data.map(user => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
            
        </div>
    )
}
