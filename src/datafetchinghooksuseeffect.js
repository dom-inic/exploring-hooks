import React, {useState, useEffect} from 'react'

export default function datafetchinghooksuseeffect() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000//api/users/")
        .then(response => response.json())
        .then(data => setData(data));
        

    });
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
