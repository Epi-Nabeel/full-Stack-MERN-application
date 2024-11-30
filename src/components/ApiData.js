import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); //random tetx
                setData(response.data.slice(0, 5)); 
                setLoading(false);
                // try {
                //     const response = await axios.get('https://carapi.app/api/models'); //this url doesnt work as an api
                //     setData(response.data.slice(0, 5)); // Limit to 5 items
                //     setLoading(false);
            } catch (err) {
                setError('Error fetching data');
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>External API Data</h1>
            {data.map(item => (
                <div key={item.id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
};

export default ApiData;
