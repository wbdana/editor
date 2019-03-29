import React, { useState, useEffect } from 'react';

function LandingPage() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        document.title = `${username}`;
    });

    const handleChange = event => {
        setUsername(event.target.value);
    };

    const handleSubmit = () => {
        console.log(`Submitted ${username}`);
    };

    return (
        <div>
            <p>Username: {username}</p>
            <input type="text" name="username" onChange={handleChange} />
            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default LandingPage;