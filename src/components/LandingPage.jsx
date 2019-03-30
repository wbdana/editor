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
            Landing Page
            <p>Username: {username}</p>
            <input type="text" name="username" onChange={handleChange} />
            <button onClick={handleSubmit}>
                Submit
            </button>

            {/* Login with Github OAuth2 */}

        </div>
    );
}

export default LandingPage;