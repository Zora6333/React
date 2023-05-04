import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/posts',
            );
            setPosts(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            {posts.map(item => (
                <div key={item.id}>
                    {item.title};
                </div>
            ))}
        </div>
    );
}

export default App;
