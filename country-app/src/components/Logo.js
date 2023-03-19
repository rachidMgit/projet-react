import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* les images importé depuis la balise img sont accessible dans public */}
            <img src="./earth.png" alt="logo react" />
            <h3>Country App</h3>
        </div>
    );
};

export default Logo;