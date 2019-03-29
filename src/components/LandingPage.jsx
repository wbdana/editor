import React, { useState } from 'react';

function LandingPage() {
    // Declare a new state variable, which we'll call "count"
    const [username, setUsername] = useState("");

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