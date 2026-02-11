import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>

                <Link to="form"> Form</Link>
                <Link to="display"> Display</Link>
                <Link to="edit"> Edit</Link>
            </div>

        </>
    )
}

export default Header; 
