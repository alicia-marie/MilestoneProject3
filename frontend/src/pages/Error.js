import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section>
            <div>
                <h1>ERROR</h1>
                <Link to="/" className="btn btn-primary">Go home</Link>
            </div>
        </section>
    )
}

export default Error;